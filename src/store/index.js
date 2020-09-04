import Vue from "vue";
import Vuex from "vuex";
import veri from "./csvjson.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameData: veri,
    publisherGameCount: null,
    yearGamesCount: null,
  },
  getters: {
    gameDataGetters(state) {
      return state.gameData;
    },
  },
  mutations: {},
  actions: {
    setDataCount(context, title) {
      let gameData = context.state.gameData;
      let dataCountList = new Map();
      let count = 0;

      gameData.forEach((element) => {
        if (dataCountList.get(element[title]) == undefined) {
          dataCountList.set(element[title], 1);
        } else {
          count = dataCountList.get(element[title]);
          dataCountList.set(element[title], ++count);
        }
      });
      title = title.toUpperCase();
      context.commit(`SET_${title}_GAMES_COUNT`, dataCountList);
    },
  },
  modules: {},
});
