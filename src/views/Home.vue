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
      activeLight: "red" as any
    };
  },
  methods: {
    onDurationEnd(activeLight: Color) {
      this.$router.push(`/${activeLight}`);
    }
  },
  created() {
    const activeLight = this.$route.params.activeLight;
    this.activeLight = activeLight;

    this.$watch(
      () => this.$route.params,
      ({ activeLight }: any) => {
        this.activeLight = activeLight;
      }
    );
  },
  components: {
    TrafficLight
  }
});
</script>
