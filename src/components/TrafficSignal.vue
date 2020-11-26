<template>
  <div class="traffic-light">
    <div class="protector"></div>
    <div class="protector protector_middle"></div>
    <div class="protector protector_bottom"></div>

    <TrafficSignalLight
      v-for="(light, index) in lights"
      :key="index"
      :type="light.type"
      :active="checkIsLightActiveByIndex(index)"
    />

    <TrafficSignalCounter
      v-show="!checkIsLightActiveByType(LightTypes.YELLOW)"
      :duration="activeLightDuration"
      @duration-end="$emit('duration-end', calcNextActiveLight())"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import TrafficSignalLight from "./TrafficSignalLight.vue";
import TrafficSignalCounter from "./TrafficSignalCounter.vue";
import { DEFAULT_LIGHT_TYPE, LightType, LightTypes } from "../utils/constants";

export default defineComponent({
  name: "TrafficSignal",
  props: {
    activeLight: {
      type: String as PropType<LightType>,
      default: DEFAULT_LIGHT_TYPE
    }
  },
  data() {
    return {
      prevActiveLightIndex: 0,
      LightTypes,
      lights: [
        { type: LightTypes.RED, duration: 5000 },
        { type: LightTypes.YELLOW, duration: 1000 },
        { type: LightTypes.GREEN, duration: 3000 }
      ]
    };
  },
  computed: {
    activeLightIndex(): number {
      return this.lights.findIndex(light => light.type === this.activeLight);
    },
    activeLightDuration(): number {
      return this.lights[this.activeLightIndex].duration;
    }
  },
  methods: {
    checkIsLightActiveByIndex(index: number) {
      return this.activeLightIndex === index;
    },
    checkIsLightActiveByType(type: LightType) {
      return this.activeLight === type;
    },
    getNextActiveLightbyIndex(index: number) {
      return this.lights[index].type;
    },
    calcNextActiveLight() {
      let nextActiveLightIndex = this.activeLightIndex;

      if (this.checkIsLightActiveByType(LightTypes.RED)) {
        nextActiveLightIndex = this.activeLightIndex + 1;
      }

      if (this.checkIsLightActiveByType(LightTypes.GREEN)) {
        nextActiveLightIndex = this.activeLightIndex - 1;
      }

      if (this.checkIsLightActiveByType(LightTypes.YELLOW)) {
        nextActiveLightIndex =
          this.prevActiveLightIndex === 0
            ? this.activeLightIndex + 1
            : this.activeLightIndex - 1;
      }

      this.prevActiveLightIndex = this.activeLightIndex;

      return this.getNextActiveLightbyIndex(nextActiveLightIndex);
    }
  },
  components: {
    TrafficSignalLight,
    TrafficSignalCounter
  }
});
</script>

<style scoped>
.traffic-light {
  position: relative;

  display: inline-block;
  vertical-align: top;
  padding: 16px;

  background-color: #222;
  border-radius: 10px;

  box-shadow: inset 0 0 0px 5px #2a2a2a;
}

.protector {
  position: absolute;
  top: 25px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);

  border-right: solid 30px transparent;
  border-left: solid 30px transparent;
  border-top: solid 100px #191919;
  border-radius: 11px;

  z-index: -1;
}

.protector_middle {
  top: 142px;
}

.protector_bottom {
  top: 257px;
}
</style>
