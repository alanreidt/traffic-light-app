import { createStore } from "vuex";
import { Color, TimerId, MILLISECONDS_IN_A_SECOND } from "@/constants";

export default createStore({
  state: {
    activeLight: "red" as Color,
    counter: 0,
    timerId: undefined as TimerId,
  },
  getters: {},
  mutations: {
    changeActiveLight({ state }: any, activeLight) {
      state.activeLight = activeLight;
    },
    incrementCounter({ state }: any) {
      state.counter += 1;
    },
    setTimerId({ state }: any, timerId) {
      state.timerId = timerId;
    },
    resetCounter({ state }: any) {
      clearInterval(state.timerId);
      state.counter = 0;
    },
  },
  actions: {
    changeActiveLight({ commit }: any) {
      const activeLight = "red"; // calc active light here

      commit("changeActiveLight", activeLight);
    },
    startCounter({ commit }: any) {
      const timerId = setInterval(() => {
        commit("incrementCounter");
      }, MILLISECONDS_IN_A_SECOND);

      commit("setTimerId", timerId);
    },
    resetCounter({ commit }: any) {
      commit("resetCounter");
    },
  },
});
