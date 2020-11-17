<template>
  <div class="traffic-light">
    <div class="protector"></div>
    <div class="protector protector_middle"></div>
    <div class="protector protector_bottom"></div>

    <TrafficSignalLight
      v-for="(light, index) in lights"
      :key="index"
      :type="light.type"
      :duration="light.duration"
      :active="checkIsLightActive(index)"
      @duration-end="setActiveLight(calcNextActiveLight())"
    />

    <TrafficSignalCounter v-show="!isActiveLightYellow" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

import TrafficSignalLight from "./TrafficSignalLight.vue";
import TrafficSignalCounter from "./TrafficSignalCounter.vue";

export default defineComponent({
  name: "TrafficSignal",
  data() {
    return {
      prevActiveLightIndex: 0,
      lights: [
        { type: "red", duration: 3000 },
        { type: "yellow", duration: 1000 },
        { type: "green", duration: 5000 }
      ]
    };
  },
  computed: {
    activeLightIndex(): number {
      return this.lights.findIndex(light => light.type === this.activeLight);
    },
    isActiveLightYellow(): boolean {
      return this.activeLight === "yellow";
    },
    ...mapState(["activeLight"])
  },
  methods: {
    checkIsLightActive(index: number) {
      return this.activeLightIndex === index;
    },
    getNextActiveLightbyIndex(index: number) {
      return this.lights[index].type;
    },
    calcNextActiveLight() {
      let nextActiveLightIndex = this.activeLightIndex;

      if (this.activeLightIndex === 0) {
        nextActiveLightIndex = this.activeLightIndex + 1;
      }

      if (this.activeLightIndex === 2) {
        nextActiveLightIndex = this.activeLightIndex - 1;
      }

      if (this.activeLightIndex === 1) {
        nextActiveLightIndex =
          this.prevActiveLightIndex === 0
            ? this.activeLightIndex + 1
            : this.activeLightIndex - 1;
      }

      this.prevActiveLightIndex = this.activeLightIndex;

      return this.getNextActiveLightbyIndex(nextActiveLightIndex);
    },
    ...mapActions(["setActiveLight"])
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
