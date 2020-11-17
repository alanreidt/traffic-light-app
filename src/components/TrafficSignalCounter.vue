<template>
  <span class="traffic-signal__counter">{{ counterReversed }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

import { MILLISECONDS_IN_A_SECOND } from "../utils/constants";
import { secondsToMilliseconds, millisecondsToSeconds } from "../utils/helpers";

export default defineComponent({
  name: "TrafficSignalCounter",
  props: {
    duration: {
      type: Number,
      default: MILLISECONDS_IN_A_SECOND
    }
  },
  computed: {
    counterReversed(): number {
      return millisecondsToSeconds(this.duration) - this.counter;
    },
    ...mapState(["counter"])
  },
  methods: {
    ...mapActions(["startCounter", "resetCounter"])
  },
  watch: {
    counter(seconds) {
      const durationExceeded = secondsToMilliseconds(seconds) >= this.duration;

      if (!durationExceeded) return;

      this.resetCounter();
      this.$emit("duration-end");
    },
    duration() {
      // handles the case, when the active light was changed
      // by the route and the previous timer hasn't been reset
      this.resetCounter();

      this.startCounter();
    }
  },
  mounted() {
    this.startCounter();
  },
  unmounted() {
    this.resetCounter();
  }
});
</script>

<style scoped>
.traffic-signal__counter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: inline-block;
  vertical-align: top;

  color: #fff;
  font-size: 30px;
}
</style>
