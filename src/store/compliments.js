import img1 from "../assets/cats-video/1.gif";
import img2 from "../assets/cats-video/2.gif";
import img3 from "../assets/cats-video/3.gif";
import img5 from "../assets/cats-video/5.gif";
import img6 from "../assets/cats-video/6.gif";
import img7 from "../assets/cats-video/7.gif";
import img8 from "../assets/cats-video/8.gif";
import img9 from "../assets/cats-video/9.gif";
import img10 from "../assets/cats-video/10.gif";
import img11 from "../assets/cats-video/11.gif";
import img12 from "../assets/cats-video/12.gif";
import img13 from "../assets/cats-video/13.gif";
import img14 from "../assets/cats-video/14.gif";
import img15 from "../assets/cats-video/15.gif";
import img16 from "../assets/cats-video/16.gif";
import img17 from "../assets/cats-video/17.gif";

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
      case "activeDate1":
        commit("setCompliments", ["Вы меня вдохновляете!", img2]);
        commit("setNotificationMessage", "Вы - моя мотивация работать!");
        break;
      case "activeDate2":
        commit("setCompliments", ["Ты очень смешная))", img3]);
        commit("setNotificationMessage", "Мне с тобой очень весело!)");
        break;
      case "activeDate3":
        commit("setCompliments", ["Вы меня вдохновляете!", img4]);
        commit("setNotificationMessage", "Вы - моя мотивация работать!");
        break;
      case "activeDate4":
        commit("setCompliments", ["Ты очень смешная))", img5]);
        commit("setNotificationMessage", "Мне с тобой очень весело!)");
        break;
      case "activeDate5":
        commit("setCompliments", ["Вы стали частью...", img6]);
        commit("setNotificationMessage", "Частью моей жизни)");
        break;
      case "activeDate6":
        commit("setCompliments", ["А кто тут у нас умница?", img7]);
        commit("setNotificationMessage", "Это Яна у нас умница)");
        break;
      case "activeDate7":
        commit("setCompliments", ["А кто эта красивая девушка?)", img8]);
        commit(
          "setNotificationMessage",
          "Ой, это же Яна Витальевна такая красивая)"
        );
        break;
      case "activeDate8":
        commit("setCompliments", ["Я хочу от вас сегодня кружочки)", img9]);
        commit("setNotificationMessage", "Сам тоже буду отправлять)");
        break;
      case "activeDate9":
        commit("setCompliments", ["Я готов вас просто слушать)", img10]);
        commit(
          "setNotificationMessage",
          "Даже если для меня это не актуальная тема!)"
        );
        break;
      case "activeDate10":
        commit("setCompliments", [
          "Мне нравится называть тебя козявкой)",
          img11,
        ]);
        commit("setNotificationMessage", "Это звучит мило))");
        break;
      case "activeDate11":
        commit("setCompliments", ["Хорошей вам работы)", img12]);
        commit(
          "setNotificationMessage",
          "Надеюсь, что вы не устанете сегодня)"
        );
        break;
      case "activeDate12":
        commit("setCompliments", ["Вы просто ооооооооочень красивая)", img13]);
        commit("setNotificationMessage", "Я не перестану это говорить!");
        break;
      case "activeDate13":
        commit("setCompliments", ["Хотите правду?", img14]);
        commit("setNotificationMessage", "Вы мне нравитесь!)");
        break;
      case "activeDate14":
        commit("setCompliments", ["Приближается наша встреча", img15]);
        commit(
          "setNotificationMessage",
          "Даже не верится, что увижу тебя вживую!"
        );
        break;
      case "activeDate15":
        commit("setCompliments", ["Ты классная хозяйка", img16]);
        commit("setNotificationMessage", "И я этому ой как радуюсь");
        break;
      case "activeDate16":
        commit("setCompliments", ["ошибка... хотя не, шутка)", img17]);
        commit("setNotificationMessage", "Просто пришли мне кружочек)");
        break;
      case "activeDate17":
        commit("setCompliments", [
          "Я считаю свои благословения... и ты в этом списке)",
          img1,
        ]);
        commit("setNotificationMessage", "Не на последнем месте))");
        break;
      case "activeDate18":
        commit("setCompliments", ["Иногда мне тяжело", img2]);
        commit("setNotificationMessage", "Но ты меня ободряешь)");
        break;
      case "activeDate19":
        commit("setCompliments", ["Твои утренние котики - красота)", img3]);
        commit("setNotificationMessage", "Мы скоро сами станем котиками 😅");
        break;
      case "activeDate20":
        commit("setCompliments", ["У меня есть вопрос...", img10]);
        commit("setNotificationMessage", "Ты выйдешь за меня?)");
        break;
      case "activeDate21":
        commit("setCompliments", ["У меня есть вопрос...", img10]);
        commit("setNotificationMessage", "Ты выйдешь за меня?)");
        break;
      case "activeDate22":
        commit("setCompliments", ["У меня есть вопрос...", img10]);
        commit("setNotificationMessage", "Ты выйдешь за меня?)");
        break;
      case "activeDate23":
        commit("setCompliments", [
          "Не стесняйся, когда говорят тебе комплименты)",
          img7,
        ]);
        commit("setNotificationMessage", "Ведь ты их заслуживаешь))");
        break;
      case "activeDate24":
        commit("setCompliments", [
          "Я готов поддержать тебя в любой момент!",
          img8,
        ]);
        commit("setNotificationMessage", "Просто напиши/позвони");
        break;
      case "activeDate25":
        commit("setCompliments", ["Ты очень мудрая!", img9]);
        commit("setNotificationMessage", "На пол года меня старше все таки)");
        break;
      case "activeDate26":
        commit("setCompliments", ["Ты красивая)", img10]);
        commit("setNotificationMessage", "Жду кружочек!)");
        break;
      case "activeDate27":
        commit("setCompliments", [
          "Ну все, я привык к твоим голосовым)",
          img11,
        ]);
        commit(
          "setNotificationMessage",
          "Доводим дело до конца с Божьей помощью!"
        );
        break;
      case "activeDate28":
        commit("setCompliments", ["Ты умница!", img12]);
        commit("setNotificationMessage", "Даже когда держишь неудачи)");
        break;
      case "activeDate29":
        commit("setCompliments", ["Я восхищен!", img13]);
        commit("setNotificationMessage", "Я еще раз восхищен!");
        break;
      case "activeDate30":
        commit("setCompliments", ["Надеюсь скоро увидимся)", img14]);
        commit("setNotificationMessage", "Не много даже волнуюсь))");
        break;
      case "activeDate31":
        commit("setCompliments", ["Ты ооочень милая)", img15]);
        commit(
          "setNotificationMessage",
          "Я не могу это в словах даже передать!)"
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
