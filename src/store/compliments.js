import { createStore } from "vuex";
import img1 from "../assets/gifs/cat__two.gif";
import img2 from "../assets/gifs/popugay.gif";
import img3 from "../assets/gifs/cat5.gif";
import img4 from "../assets/gifs/cat4.gif";
import img5 from "../assets/gifs/cat__one.gif";

const state = {
  compliments: [
    {
      id: 1,
      compliment: "Забей на хомяка, ты нормально зарабатываешь!",
      show: 0,
      img: img4,
    },
    {
      id: 2,
      compliment: "Ты слишком... не выразить словами",
      show: 0,
      img: img4,
    },
    {
      id: 3,
      compliment: "Делая - делай, не делая - не делай!",
      show: 0,
      img: img4,
    },
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
