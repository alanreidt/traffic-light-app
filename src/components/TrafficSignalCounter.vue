<template>
  <span class="traffic-signal__counter">{{ counter }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "TrafficSignalLight",
  computed: {
    ...mapState(["counter"])
  }
});
</script>

<style scoped>
.traffic-signal__counter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: inline-block;
  vertical-align: top;

  color: #fff;
  font-size: 30px;
}
</style>
