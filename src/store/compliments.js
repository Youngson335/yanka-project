import img1 from "../assets/gifs/cat__two.gif";
import img2 from "../assets/gifs/cat__one.gif";
import img3 from "../assets/gifs/cat5.gif";
import img4 from "../assets/gifs/cat4.gif";
import img5 from "../assets/gifs/cat3.gif";
import img6 from "../assets/gifs/popugay.gif";

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
        commit("setCompliments", ["Ты сегодня 'вау'!", img1]);
        commit("setNotificationMessage", "И это правда!");
        break;
      case "activeDate27":
        commit("setCompliments", ["Ты большая молодец!", img2]);
        commit("setNotificationMessage", "Не замерзни только пожалуйста!)");
        break;
      case "activeDate28":
        commit("setCompliments", ["Шикарно выглядишь!", img3]);
        commit("setNotificationMessage", "Не смущайся!)");
        break;
      case "activeDate29":
        commit("setCompliments", ["Люби брата своего)", img4]);
        commit("setNotificationMessage", "Даже если невозможно");
        break;
      case "activeDate30":
        // commit("setCompliments", ["Тебе идет улыбка!)", img5]);
        commit(
          "setNotificationMessage",
          "Улыбка идет и пусть никогда не уходит!"
        );
        break;
      case "activeDate31":
        // commit("setCompliments", ["Я рад, когда ты радуешься!", img6]);
        // commit("setNotificationMessage", "И наоборот");
        break;
      case "activeDate1":
        commit("setCompliments", ["Твои переживания - мои переживания", img1]);
        commit("setNotificationMessage", "Но лучше не переживай)");
        break;
      case "activeDate2":
        commit("setCompliments", ["Мне нравится с тобой все обсуждать", img2]);
        commit("setNotificationMessage", "Даже когда нечего обсуждать)");
        break;
      case "activeDate3":
        commit("setCompliments", [
          "Я готов слушать все новости твоей жизни!",
          img3,
        ]);
        commit("setNotificationMessage", "Ведь этот канал мне нравится!)");
        break;
      case "activeDate4":
        commit("setCompliments", [
          "В любой трудный момент ты можешь позвонить!",
          img4,
        ]);
        commit(
          "setNotificationMessage",
          "Если не отвечу, значит у меня тоже трудность("
        );
        break;
      case "activeDate5":
        commit("setCompliments", ["Молюсь за тебя!", img5]);
        commit("setNotificationMessage", "Верю, что взаимно!)");
        break;
      case "activeDate6":
        commit("setCompliments", [
          "Твои кружочки в телеграм - самый пересматриваемый фильм!",
          img6,
        ]);
        commit("setNotificationMessage", "С отличным сюжетом!");
        break;
      case "activeDate7":
        commit("setCompliments", ["Тебе идет улыбка!)", img5]);
        commit(
          "setNotificationMessage",
          "Улыбка идет и пусть никогда не уходит!"
        );
        break;
      case "activeDate8":
        commit("setCompliments", ["Я рад, когда ты радуешься!", img6]);
        commit("setNotificationMessage", "И наоборот");
        break;
      case "activeDate9":
        commit("setCompliments", ["Ты будешь хорошей матерью!", img1]);
        commit("setNotificationMessage", "А это важно!");
        break;
      case "activeDate10":
        commit("setCompliments", [
          "Ты такая же красивая, как погода в Приображении!)",
          img2,
        ]);
        commit(
          "setNotificationMessage",
          "Прогноз обещает быть солнечным)",
          img3
        );
        break;
      case "activeDate11":
        commit("setCompliments", ["Твое 'доброе утро' - замена кофе", img4]);
        commit("setNotificationMessage", "И энергетику))");
        break;
      case "activeDate12":
        commit("setCompliments", ["Яяяяяяяяяян...", img5]);
        commit("setNotificationMessage", "Как дела?)");
        break;
      case "activeDate13":
        commit("setCompliments", ["Я рад, что ты служишь Богу!", img6]);
        commit("setNotificationMessage", "Он это оценит)");
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
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate18":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate19":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate20":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate21":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate22":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate23":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
        break;
      case "activeDate24":
        commit("setCompliments", ["ошибка, отпиши мне в телеграм"]);
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
