import img1 from "../assets/cats-video/1.webm";
import img2 from "../assets/cats-video/2.webm";
import img3 from "../assets/cats-video/3.webm";
import img5 from "../assets/cats-video/5.webm";
import img6 from "../assets/cats-video/6.webm";
import img7 from "../assets/cats-video/7.webm";
import img8 from "../assets/cats-video/8.webm";
import img9 from "../assets/cats-video/9.webm";
import img10 from "../assets/cats-video/10.webm";
import img11 from "../assets/cats-video/11.webm";
import img12 from "../assets/cats-video/12.webm";
import img13 from "../assets/cats-video/13.webm";
import img14 from "../assets/cats-video/14.webm";
import img15 from "../assets/cats-video/15.webm";
import img16 from "../assets/cats-video/16.webm";
import img17 from "../assets/cats-video/17.webm";

const state = {
  activeDate: new Date().getDate(),
  compliments: [
    { id: 1, compliment: "", show: 0, img: null },
    { id: 2, compliment: "", show: 0, img: null },
    { id: 3, compliment: "", show: 0, img: null },
  ],
  notificationMessage: "",
};

const mutations = {
  setCompliments(state, arr) {
    for (let i = 0; i < state.compliments.length; i++) {
      state.compliments[i].compliment = arr[0];
      state.compliments[i].img = arr[1];
    }
  },
  setNotificationMessage(state, str) {
    state.notificationMessage = str;
  },
};

const actions = {
  updateCompliments({ commit, state }) {
    const cardId = localStorage.getItem(`activeDate${state.activeDate}`);
    console.log("cardID", cardId);
    switch (cardId) {
      case "activeDate26":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate27":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate28":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate29":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate30":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate31":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate1":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate2":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate3":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate4":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate5":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate6":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate7":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate8":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate9":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate10":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate11":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate12":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate13":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate14":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate15":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate16":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate17":
        commit("setCompliments", [
          "Я рад, что могу с тобой общаться по вечерам) ",
          img1,
        ]);
        commit("setNotificationMessage", "Даже если хочу спать...");
        break;
      case "activeDate18":
        commit("setCompliments", ["С тебя кружочек)", img2]);
        commit("setNotificationMessage", "Жду 😁");
        break;
      case "activeDate19":
        commit("setCompliments", ["Твои утренние котики - красота)", img2]);
        commit("setNotificationMessage", "Мы скоро сами станем котиками 😅");
        break;
      case "activeDate20":
        commit("setCompliments", ["Я рад, когда ты радуешься!", img8]);
        commit("setNotificationMessage", "И наоборот");
        break;
      case "activeDate21":
        commit("setCompliments", ["Я рад, когда ты радуешься!", img9]);
        commit("setNotificationMessage", "И наоборот");
        break;
      case "activeDate22":
        commit("setCompliments", ["У тебя прекрасные родители)", img10]);
        commit("setNotificationMessage", "Кружочки твоей мамы - 🥰");
        break;
      case "activeDate23":
        commit("setCompliments", [
          "Не стесняйся, когда говорят тебе комплименты)",
          img11,
        ]);
        commit("setNotificationMessage", "Ведь ты их заслуживаешь))");
        break;
      case "activeDate24":
        commit("setCompliments", ["Я готов поддержать в любой момент!", img12]);
        commit("setNotificationMessage", "Просто напиши/позвони");
        break;
      case "activeDate25":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate26":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      default:
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
    }
  },
};

// Просто экспортируем объект модуля
export default {
  namespaced: true, // Пространство имен включено
  state,
  mutations,
  actions,
};
