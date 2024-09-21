import { createStore } from "vuex";

const state = {
  compliments: [],
};

const mutations = {
  setDataCompliments(state, data) {
    state.compliments = data.compliments;
  },
};

const actions = {
  async getCompliments({ commit }) {
    try {
      const response = await fetch("http://localhost:8080/compliments");
      const data = await response.json();
      console.log(data);
      commit("setDataCompliments", data);
      if (data.compliments.length === 0) {
        console.log("Нет комплиментов в базе данных.");
      }
    } catch (error) {
      console.error("Ошибка при получении комплиментов:", error);
    }
  },
};

const getters = {};

const store = createStore({
  state,
  mutations,
  actions,
  getters,
});

store.dispatch("getCompliments");

export default store;
