<template>
  <div class="home">
    <TrafficLight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TrafficLight from "@/components/TrafficLight.vue";

export default defineComponent({
  name: "Home",
  components: {
    TrafficLight
  }
});
</script>
