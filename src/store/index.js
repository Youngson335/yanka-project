import { createStore } from "vuex";
import tg from "../telegram.js";

export default createStore({
  state: {
    permissionUser: null,
    userName: "Владислав",
    userId: 1805077298,
    userData: "",
    yankaId: 1805077298,
    myId: 1491570929,
    featuredId: [1805077298, 1491570929],
    accept: localStorage.getItem("stateModal") || false,
    confirmAccept: JSON.parse(localStorage.getItem("stateModal")) || false,
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
    setPermissionUser(state, order) {
      state.permissionUser = order;
    },
    setAcceptCheck(state, val) {
      state.accept = val;
    },
    setConfirmAccept(state, val) {
      state.confirmAccept = val;
    },
  },
  actions: {
    initUserTg({ commit, dispatch }) {
      // деплой версия
      // if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      //   commit("setUserName", tg.initDataUnsafe.user.first_name);
      //   commit("setUserID", tg.initDataUnsafe.user.id);
      //   commit("setUserData", JSON.stringify(tg.initDataUnsafe));
      //   dispatch("setUserPermission", commit);
      // }
      dispatch("setUserPermission", commit);
    },
    setUserPermission({ commit, state }) {
      const userId = state.userId;
      const featuredId = state.featuredId;
      const result = featuredId.find((id) => {
        if (id === userId) {
          commit("setPermissionUser", true);
          return true;
        } else {
          commit("setPermissionUser", false);
          return false;
        }
      });
    },
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getUserName(state) {
      return state.userName;
    },
    getAccept(state) {
      return state.accept;
    },
    getConfirmAccept(state) {
      return state.confirmAccept;
    },
  },
  modules: {},
});
