import { createStore } from "vuex";
import { Color, TimerId } from "@/constants";

export default createStore({
  state: {
    activeLight: "red" as Color,
    secondsCounter: 0,
    timerId: undefined as TimerId,
  },
  getters: {},
  mutations: {},
  actions: {},
});
