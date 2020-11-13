<template>
  <div class="traffic-light">
    <div class="protector"></div>
    <div class="protector protector_middle"></div>
    <div class="protector protector_bottom"></div>

    <div
      class="light light_red"
      :class="{ light_active: activeLightIndex === 0 }"
    ></div>
    <div
      class="light light_yellow"
      :class="{ light_active: activeLightIndex === 1 }"
    ></div>
    <div
      class="light light_green"
      :class="{ light_active: activeLightIndex === 2 }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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

.light {
  width: 100px;
  height: 100px;
  margin: 16px;

  background: repeating-linear-gradient(#333, #443 5px);
  border-radius: 50%;
}

.light_active.light_red {
  background: repeating-linear-gradient(#f00, #e00 5px);
  box-shadow: 0 0 40px #f00;
}

.light_active.light_yellow {
  background: repeating-linear-gradient(#fd0, #ec0 5px);
  box-shadow: 0 0 40px #fd0;
}

.light_active.light_green {
  background: repeating-linear-gradient(#0d0, #0c0 5px);
  box-shadow: 0 0 40px #0d0;
}
</style>
