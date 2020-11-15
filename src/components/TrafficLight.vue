<template>
  <div class="traffic-light">
    <div class="protector"></div>
    <div class="protector protector_middle"></div>
    <div class="protector protector_bottom"></div>

    <Light
      v-for="(light, index) in lights"
      :key="index"
      :color="light.color"
      :duration="light.duration"
      :active="checkIsLightActive(index)"
      @duration-end="incrementActiveLightIndex()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Light from "./Light.vue";

export default defineComponent({
  name: "TrafficLight",
  props: {
    initialActiveLightIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeLightIndex: this.initialActiveLightIndex,
      lights: [
        { color: "red", duration: 3000 },
        { color: "yellow", duration: 1000 },
        { color: "green", duration: 5000 }
      ]
    };
  },
  computed: {
    activeLightIndexNormalized(): number {
      return this.activeLightIndex % 3;
    }
  },
  methods: {
    checkIsLightActive(index: number) {
      const isLightActive = this.activeLightIndexNormalized === index;
      console.log(isLightActive);

      return isLightActive;
    },
    incrementActiveLightIndex() {
      this.activeLightIndex += 1;
    }
  },
  components: {
    Light
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
