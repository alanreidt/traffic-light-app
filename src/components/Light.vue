<template>
  <div class="light" :class="[{ light_active: ticking }, colorClass]"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

const MILISECONDS_IN_A_SECOND = 1000;
const secondsToMiliseconds = (seconds: number) =>
  seconds * MILISECONDS_IN_A_SECOND;

type Color = "red" | "yellow" | "green";
type TimerId = number | undefined;

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
      counter: 0,
      timerId: undefined as TimerId,
      ticking: this.active
    };
  },
  computed: {
    colorClass(): string {
      return `light_${this.color}`;
    }
  },
  watch: {
    counter(seconds) {
      const durationExceeded = secondsToMiliseconds(seconds) >= this.duration;

      if (!durationExceeded) return;

      clearInterval(this.timerId);
      this.counter = 0;
      this.ticking = false;
    }
  },
  mounted() {
    if (!this.ticking) return;

    this.timerId = setInterval(() => {
      this.counter += 1;
    }, MILISECONDS_IN_A_SECOND);
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
