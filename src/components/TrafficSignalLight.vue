<template>
  <div
    class="traffic-signal__light"
    :class="[{ 'traffic-signal__light_active': active }, typeClass]"
  ></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { DEFAULT_LIGHT_TYPE, LightType, LightTypes } from "../utils/constants";

export default defineComponent({
  name: "TrafficSignalLight",
  props: {
    type: {
      type: String as PropType<LightType>,
      default: DEFAULT_LIGHT_TYPE
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClass(): string {
      return this.type === LightTypes.RED
        ? ""
        : `traffic-signal__light_${this.type}`;
    }
  }
});
</script>

<style scoped>
.traffic-signal__light {
  width: 100px;
  height: 100px;
  margin: 16px;

  opacity: 0.15;
  background-color: #f00;
  border-radius: 50%;
}

.traffic-signal__light_yellow {
  background-color: #fd0;
}

.traffic-signal__light_green {
  background-color: #0d0;
}

.traffic-signal__light_active {
  opacity: 1;
  box-shadow: 0 0 40px #f00;
}

.traffic-signal__light_active.traffic-signal__light_yellow {
  box-shadow: 0 0 40px #fd0;
}

.traffic-signal__light_active.traffic-signal__light_green {
  box-shadow: 0 0 40px #0d0;
}
</style>
