<template>
  <div class="home">
    <TrafficSignal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { RouteParams } from "vue-router";

import TrafficSignal from "@/components/TrafficSignal.vue";

export default defineComponent({
  name: "Home",
  computed: {
    ...mapState(["activeLight"])
  },
  methods: {
    ...mapActions(["setActiveLight"])
  },
  watch: {
    activeLight(value) {
      this.$router.push(`/${value}`);
    }
  },
  created() {
    const activeLight = this.$route.params.activeLight;

    this.setActiveLight(activeLight);

    this.$watch(
      () => this.$route.params,
      ({ activeLight }: RouteParams) => {
        this.setActiveLight(activeLight);
      }
    );
  },
  components: {
    TrafficSignal
  }
});
</script>
