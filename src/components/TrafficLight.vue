<template>
  <div class="traffic-light">
    <div class="protector"></div>
    <div class="protector protector_middle"></div>
    <div class="protector protector_bottom"></div>
    <div class="light"></div>
    <div class="light light_yellow"></div>
    <div class="light light_green"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrafficLight"
});
</script>

<style scoped>
.traffic-light {
  position: relative;
  background: #222;
  border-radius: 10px;
  padding: 16px;
  box-shadow: inset 0 0 0px 5px #2a2a2a;
}

.light {
  position: relative;
  margin: 16px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: repeating-linear-gradient(#333, #443 5px);
  animation-name: lightUpRed;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: step-end;
}

.light_yellow {
  animation-name: lightUpYellow;
}

.light_green {
  animation-name: lightUpGreen;
}

@keyframes lightUpRed {
  0% {
    background: repeating-linear-gradient(#f00, #e00 5px);
    box-shadow: 0 0 40px #f00;
    z-index: 1;
  }
  35% {
    background: repeating-linear-gradient(#443, #333 5px);
    box-shadow: none;
    z-index: 0;
  }
}

@keyframes lightUpYellow {
  80% {
    background: repeating-linear-gradient(#fd0, #ec0 5px);
    box-shadow: 0 0 40px #fd0;
    z-index: 1;
  }
}

@keyframes lightUpGreen {
  35% {
    background: repeating-linear-gradient(#0d0, #0c0 5px);
    box-shadow: 0 0 40px #0d0;
    z-index: 1;
  }
  80% {
    background: repeating-linear-gradient(#443, #333 5px);
    box-shadow: none;
    z-index: 0;
  }
}

.protector {
  width: 100%;
  position: absolute;
  top: 25px;
  left: 50%;
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
