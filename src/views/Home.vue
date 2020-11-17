<template>
  <div class="home">
    <TrafficSignal
      :activeLight="$route.params.activeLight"
      @duration-end="onDurationEnd"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TrafficSignal from "@/components/TrafficSignal.vue";
import { LightType } from "../utils/constants";

export default defineComponent({
  name: "Home",
  methods: {
    onDurationEnd(activeLight: LightType) {
      this.$router.push(`/${activeLight}`);
    }
  },
  components: {
    TrafficSignal
  }
});
</script>
