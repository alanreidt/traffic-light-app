<template>
  <div class="home">
    <TrafficLight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

import TrafficLight from "@/components/TrafficLight.vue";

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
  },
  components: {
    TrafficLight
  }
});
</script>
