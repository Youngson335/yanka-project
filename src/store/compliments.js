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

import srcImagePoint1 from "../assets/new_version_material/serdze-points/serdze-point1.webp";
import srcImagePoint2 from "../assets/new_version_material/serdze-points/serdze-point2.webp";
import srcImagePoint3 from "../assets/new_version_material/serdze-points/serdze-point3.webp";

const state = {
  activeDate: new Date().getDate(),
  compliments: [
    { id: 1, compliment: "", show: 0, img: null, srcImage: srcImagePoint1 },
    { id: 2, compliment: "", show: 0, img: null, srcImage: srcImagePoint2 },
    { id: 3, compliment: "", show: 0, img: null, srcImage: srcImagePoint3 },
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
        commit("setCompliments", ["Ты красивая)", img2]);
        commit("setNotificationMessage", "Жду кружочек!)");
        break;
      case "activeDate27":
        commit("setCompliments", ["Воскресный созвон?", img3]);
        commit("setNotificationMessage", "Было бы не плохо))");
        break;
      case "activeDate28":
        commit("setCompliments", ["Ты очень мудрая!", img4]);
        commit("setNotificationMessage", "На пол года меня старше все таки)");
        break;
      case "activeDate29":
        commit("setCompliments", ["Ты очень смешная))", img5]);
        commit("setNotificationMessage", "Мне с тобой очень весело!)");
        break;
      case "activeDate30":
        commit("setCompliments", ["Надеюсь скоро увидимся)", img6]);
        commit("setNotificationMessage", "Не много даже волнуюсь))");
        break;
      case "activeDate31":
        commit("setCompliments", ["Ты ооочень милая)", img7]);
        commit(
          "setNotificationMessage",
          "Я не могу это в словах даже передать!)"
        );
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
        commit("setCompliments", ["Мы немного ближе)", img1]);
        commit("setNotificationMessage", "По особому ощущается)");
        break;
      case "activeDate7":
        commit("setCompliments", ["Вы меня вдохновляете!", img2]);
        commit("setNotificationMessage", "Вы - моя мотивация работать!");
        break;
      case "activeDate8":
        commit("setCompliments", ["Я хочу от вас сегодня кружочки)", img3]);
        commit("setNotificationMessage", "Сам тоже буду отправлять)");
        break;
      case "activeDate9":
        commit("setCompliments", ["Я готов вас просто слушать)", img4]);
        commit(
          "setNotificationMessage",
          "Даже если для меня это не актуальная тема!)"
        );
        break;
      case "activeDate10":
        commit("setCompliments", [
          "Как будто бы хочется вас увидеть на звонке",
          img5,
        ]);
        commit(
          "setNotificationMessage",
          "Как вы думаете, хорошая идея, или рано?"
        );
        break;
      case "activeDate11":
        commit("setCompliments", ["Хорошей вам работы)", img6]);
        commit(
          "setNotificationMessage",
          "Надеюсь, что вы не устанете сегодня)"
        );
        break;
      case "activeDate12":
        commit("setCompliments", ["Вы просто ооооооооочень красивая)", img7]);
        commit("setNotificationMessage", "Я не перестану это говорить!");
        break;
      case "activeDate13":
        commit("setCompliments", ["Хотите правду?", img7]);
        commit("setNotificationMessage", "Вы мне нравитесь!)");
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
        commit("setCompliments", ["Не болей)", img1]);
        commit(
          "setNotificationMessage",
          "А то с тобой за компанию буду болеть))"
        );
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
