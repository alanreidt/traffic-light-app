<template>
  <div class="traffic-light">
    <div class="protector"></div>
    <div class="protector protector_middle"></div>
    <div class="protector protector_bottom"></div>

    <Light :active="activeLightIndex === 0" />
    <Light color="yellow" :active="activeLightIndex === 1" />
    <Light color="green" :active="activeLightIndex === 2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Light from "./Light.vue";

export default defineComponent({
  name: "TrafficLight",
  data() {
    return {
      initialLightIndex: 0,
      lights: [
        { color: "red", duration: 10000 },
        { color: "yellow", duration: 3000 },
        { color: "green", duration: 15000 },
        { color: "yellow", duration: 3000 }
      ]
    };
  },
  computed: {
    activeLightIndex(): number {
      return this.initialLightIndex % 3;
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
