import { createStore } from "vuex";
import { Color, TimerId, MILISECONDS_IN_A_SECOND } from "@/constants";

export default createStore({
  state: {
    activeLight: "red" as Color,
    secondsCounter: 0,
    timerId: undefined as TimerId,
  },
  getters: {},
  mutations: {
    changeActiveLight({ state }: any, activeLight) {
      state.activeLight = activeLight;
    },
    updateTimer({ state }: any) {
      state.secondsCounter += 1;
    },
    setTimer({ state }: any, timerId) {
      state.timerId = timerId;
    },
    resetTimer({ state }: any) {
      clearInterval(state.timerId);
      state.secondsCounter = 0;
    },
  },
  actions: {
    changeActiveLight({ commit }: any) {
      const activeLight = "red"; // calc active light here

      commit("changeActiveLight", activeLight);
    },
    startTimer({ commit }: any) {
      const timerId = setInterval(() => {
        commit("updateTimer");
      }, MILISECONDS_IN_A_SECOND);

      commit("setTimer", timerId);
    },
    resetTimer({ commit }: any) {
      commit("resetTimer");
    },
  },
});
