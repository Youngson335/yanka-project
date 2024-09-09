import { createStore } from "vuex";
import tg from "../telegram.js";

export default createStore({
  state: {
    userName: "",
    userId: "",
    userData: "",
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    },
    setUserID(state, id) {
      state.userId = id;
    },
    setUserData(state, data) {
      state.userData = data;
    },
  },
  actions: {
    initUserTg({ commit, dispatch }) {
      console.log("отработал");
      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        commit("setUserName", tg.initDataUnsafe.user.first_name);
        commit("setUserID", tg.initDataUnsafe.user.id);
        commit("setUserData", JSON.stringify(tg.initDataUnsafe));
        console.log(this.userName);
        console.log(this.userId);
        console.log("отработал");
      }
    },
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getUserName(state) {
      return state.userName;
    },
  },
  modules: {},
});
