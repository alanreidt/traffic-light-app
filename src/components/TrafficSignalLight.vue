<template>
  <div
    class="traffic-signal__light"
    :class="[{ 'traffic-signal__light_active': active }, typeClass]"
  ></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions, mapState } from "vuex";

import { LightType, MILLISECONDS_IN_A_SECOND } from "../utils/constants";
import { secondsToMilliseconds } from "../utils/helpers";

export default defineComponent({
  name: "TrafficSignalLight",
  props: {
    type: {
      type: String as PropType<LightType>,
      default: "red"
    },
    duration: {
      type: Number,
      default: MILLISECONDS_IN_A_SECOND
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClass(): string {
      return `traffic-signal__light_${this.type}`;
    },
    ...mapState(["counter"])
  },
  methods: {
    ...mapActions(["startCounter", "resetCounter"])
  },
  watch: {
    counter(seconds) {
      const durationExceeded = secondsToMilliseconds(seconds) >= this.duration;

      if (!durationExceeded || !this.active) return;

      this.resetCounter();
      this.$emit("duration-end");
    },
    active(active) {
      if (!active) return;

      this.resetCounter();
      this.startCounter();
    }
  },
  mounted() {
    if (!this.active) return;

    this.startCounter();
  },
  unmounted() {
    this.resetCounter();
  }
});
</script>

<style scoped>
.traffic-signal__light {
  width: 100px;
  height: 100px;
  margin: 16px;

  background: repeating-linear-gradient(#333, #443 5px);
  border-radius: 50%;
}

.traffic-signal__light_active.traffic-signal__light_red {
  background: repeating-linear-gradient(#f00, #e00 5px);
  box-shadow: 0 0 40px #f00;
}

.traffic-signal__light_active.traffic-signal__light_yellow {
  background: repeating-linear-gradient(#fd0, #ec0 5px);
  box-shadow: 0 0 40px #fd0;
}

.traffic-signal__light_active.traffic-signal__light_green {
  background: repeating-linear-gradient(#0d0, #0c0 5px);
  box-shadow: 0 0 40px #0d0;
}
</style>
