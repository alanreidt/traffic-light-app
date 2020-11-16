<template>
  <div class="home">
    <TrafficLight
      :activeLight="$route.params.activeLight"
      @duration-end="onDurationEnd"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TrafficLight from "@/components/TrafficLight.vue";
import { Color } from "../utils/constants";

export default defineComponent({
  name: "Home",
  methods: {
    onDurationEnd(activeLight: Color) {
      this.$router.push(`/${activeLight}`);
    }
  },
  components: {
    TrafficLight
  }
});
</script>
