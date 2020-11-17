<template>
  <div
    class="traffic-signal__light"
    :class="[{ 'traffic-signal__light_active': active }, typeClass]"
  ></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { LightType } from "../utils/constants";

export default defineComponent({
  name: "TrafficSignalLight",
  props: {
    type: {
      type: String as PropType<LightType>,
      default: "red"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClass(): string {
      return `traffic-signal__light_${this.type}`;
    }
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
