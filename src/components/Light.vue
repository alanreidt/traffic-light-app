<template>
  <div class="light" :class="[{ light_active: active }, colorClass]"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Color = "red" | "yellow" | "green";

export default defineComponent({
  name: "Light",
  props: {
    color: {
      type: String as PropType<Color>,
      default: "red"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorClass(): string {
      return `light_${this.color}`;
    }
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
