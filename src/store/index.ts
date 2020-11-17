import { createStore } from "vuex";
import { TimerId, MILLISECONDS_IN_A_SECOND } from "@/utils/constants";

export default createStore({
  state: {
    counter: 0,
    timerId: undefined as TimerId,
  },
  getters: {},
  mutations: {
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
