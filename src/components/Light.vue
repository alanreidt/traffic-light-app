<template>
  <div class="light" :class="[{ light_active: active }, colorClass]"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Color, TimerId } from "../constants";

const MILISECONDS_IN_A_SECOND = 1000;
const secondsToMiliseconds = (seconds: number) =>
  seconds * MILISECONDS_IN_A_SECOND;

export default defineComponent({
  name: "Light",
  props: {
    color: {
      type: String as PropType<Color>,
      default: "red"
    },
    duration: {
      type: Number,
      default: MILISECONDS_IN_A_SECOND
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      secondsCounter: 0,
      timerId: undefined as TimerId
    };
  },
  computed: {
    colorClass(): string {
      return `light_${this.color}`;
    }
  },
  methods: {
    setTimer() {
      this.timerId = setInterval(() => {
        this.secondsCounter += 1;
      }, MILISECONDS_IN_A_SECOND);
    },
    resetTimer() {
      this.secondsCounter = 0;
      clearInterval(this.timerId);
    }
  },
  watch: {
    secondsCounter(seconds) {
      const durationExceeded = secondsToMiliseconds(seconds) >= this.duration;

      if (!durationExceeded) return;

      this.resetTimer();
      this.$emit("duration-end");
    },
    active(active) {
      if (!active) return;

      this.setTimer();
    }
  },
  mounted() {
    if (!this.active) return;

    this.setTimer();
  }
});
</script>

<style scoped>
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
