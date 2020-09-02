import Vue from "vue";
import Vuex from "vuex";
import veri from "./csvjson.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameData: veri,
  },
  getters: {
    gameDataGetters(state) {
      return state.gameData;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
