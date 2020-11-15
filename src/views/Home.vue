<template>
  <div class="home">
    <TrafficLight :activeLight="activeLight" @duration-end="onDurationEnd" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TrafficLight from "@/components/TrafficLight.vue";
import { Color } from "../constants";

export default defineComponent({
  name: "Home",
  data() {
    return {
      activeLight: "red"
    };
  },
  methods: {
    onDurationEnd(activeLight: Color) {
      this.activeLight = activeLight;
    }
  },
  components: {
    TrafficLight
  }
});
</script>
