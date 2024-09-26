import { createStore } from "vuex";
import tg from "../telegram.js";
import compliments from "./compliments.js";

export default createStore({
  state: {
    permissionUser: null,
    userName: "Владислав",
    userId: 1805077298,
    userData: "",
    yankaId: 1805077298,
    myId: 1491570929,
    featuredId: [1805077298, 1491570929],
    accept: localStorage.getItem("modalState") || false,
    confirmAccept: JSON.parse(localStorage.getItem("modalState")) || false,
    confirmUser: false,
    activeDate: new Date().getDate(),
    temaID: 1427340491,
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
    setConfirmUser(state, val) {
      state.confirmUser = val;
    },
  },
  actions: {
    initUserTg({ commit, dispatch, state }) {
      // деплой версия
      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        commit("setUserName", tg.initDataUnsafe.user.first_name);
        commit("setUserID", tg.initDataUnsafe.user.id);
        commit("setUserData", JSON.stringify(tg.initDataUnsafe));
        dispatch("setUserPermission", commit);
      }
      dispatch("setUserPermission", commit);
    },
    setUserPermission({ commit, state }) {
      const userId = state.userId;
      const featuredId = state.featuredId;
      const result = featuredId.find((id) => {
        if (id === userId) {
          commit("setConfirmUser", true);
          return true;
        } else {
          commit("setConfirmUser", false);
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
    getConfirmUser(state) {
      return state.confirmUser;
    },
    getCompliments(state) {
      return state.compliments;
    },
    getActiveDate(state) {
      return state.activeDate;
    },
    getNotificationMessage(state) {
      return state.compliments.notificationMessage;
    },
  },
  modules: {
    compliments,
  },
});
