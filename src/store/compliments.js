import { createStore } from "vuex";

const state = {
  compliments: [
    { id: 1, compliment: "Ты очень классно выглядишь сегодня!", show: 0 },
    { id: 2, compliment: "Тебе идет улыбка!)", show: 0 },
    { id: 3, compliment: "Хорошего дня!", show: 0 },
  ],
};

const mutations = {};

const actions = {
  // async getCompliments({ commit }) {
  //   try {
  //     const response = await fetch("http://localhost:8080/compliments");
  //     const data = await response.json();
  //     console.log(data);
  //     commit("setDataCompliments", data);
  //     if (data.compliments.length === 0) {
  //       console.log("Нет комплиментов в базе данных.");
  //     }
  //   } catch (error) {
  //     console.error("Ошибка при получении комплиментов:", error);
  //   }
  // },
};

const getters = {};

const store = createStore({
  state,
  mutations,
  actions,
  getters,
});

export default store;
