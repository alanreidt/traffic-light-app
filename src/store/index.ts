import { createStore } from "vuex";
import { LightType, TimerId, MILLISECONDS_IN_A_SECOND } from "@/utils/constants";

export default createStore({
  state: {
    activeLight: "red" as LightType,
    counter: 0,
    timerId: undefined as TimerId,
  },
  getters: {},
  mutations: {
    setActiveLight(state, activeLight) {
      state.activeLight = activeLight;
    },
    incrementCounter(state) {
      state.counter += 1;
    },
    setTimerId(state, timerId: TimerId) {
      state.timerId = timerId;
    },
    resetCounter(state) {
      clearInterval(state.timerId);
      state.counter = 0;
    },
  },
  actions: {
    setActiveLight({ commit }, activeLight) {
      commit("setActiveLight", activeLight);
    },
    startCounter({ commit }) {
      const timerId = setInterval(() => {
        commit("incrementCounter");
      }, MILLISECONDS_IN_A_SECOND);

      commit("setTimerId", timerId);
    },
    resetCounter({ commit }) {
      commit("resetCounter");
    },
  },
});
