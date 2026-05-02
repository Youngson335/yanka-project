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
    switch (cardId) {
      case "activeDate1":
        commit("setCompliments", ["Ты очень милая!", img2]);
        commit("setNotificationMessage", "При виде тебя умиляюсь");
        break;
      case "activeDate2":
        commit("setCompliments", ["Бог тебя любит", img3]);
        commit("setNotificationMessage", "И всегда тебя поддерживает!");
        break;
      case "activeDate3":
        commit("setCompliments", ["Ты моя опора", img4]);
        commit("setNotificationMessage", "Стремлюсь быть взаимной опорой");
        break;
      case "activeDate4":
        commit("setCompliments", ["Ты просто секс", img5]);
        commit("setNotificationMessage", "Может секс?");
        break;
      case "activeDate5":
        commit("setCompliments", ["Боюсь тебя потерять", img6]);
        commit(
          "setNotificationMessage",
          "Сразу становится грустно от таких мыслей",
        );
        break;
      case "activeDate6":
        commit("setCompliments", ["Ты золото", img7]);
        commit("setNotificationMessage", "Уникальна и ценна!");
        break;
      case "activeDate7":
        commit("setCompliments", ["Не люблю с тобой ссориться...", img8]);
        commit("setNotificationMessage", "Но люблю мириться!");
        break;
      case "activeDate8":
        commit("setCompliments", ["Не унывай", img9]);
        commit("setNotificationMessage", "Улыбнись и поблагодари Бога!");
        break;
      case "activeDate9":
        commit("setCompliments", ["Будь мудрой женой", img10]);
        commit(
          "setNotificationMessage",
          "Начинай свой день с Библии и молитвы)",
        );
        break;
      case "activeDate10":
        commit("setCompliments", ["Не могу представить жизни без тебя", img11]);
        commit("setNotificationMessage", "Ведь ты исполнила мою мечту");
        break;
      case "activeDate11":
        commit("setCompliments", ["Ты очень вкусно готовишь", img12]);
        commit("setNotificationMessage", "Мне очень повезло");
        break;
      case "activeDate12":
        commit("setCompliments", [
          "Я рад, что Бог тебя активно использует",
          img13,
        ]);
        commit(
          "setNotificationMessage",
          "Очень приятно видеть свою жену в служении",
        );
        break;
      case "activeDate13":
        commit("setCompliments", ["Бог нас благословил", img14]);
        commit("setNotificationMessage", "И еще благословит)");
        break;
      case "activeDate14":
        commit("setCompliments", ["Ты будешь прекрасной мамой", img15]);
        commit("setNotificationMessage", "И ты прекрасная жена");
        break;
      case "activeDate15":
        commit("setCompliments", ["Не томись о прошлом", img16]);
        commit("setNotificationMessage", "Бог дает тебе самое лучшее, поверь");
        break;
      case "activeDate16":
        commit("setCompliments", ["Хочу тебя ", img17]);
        commit("setNotificationMessage", "и кофи...");
        break;
      case "activeDate17":
        commit("setCompliments", ["Твой муж не Соломон", img1]);
        commit("setNotificationMessage", "Ему все классно с одной женой");
        break;
      case "activeDate18":
        commit("setCompliments", ["Будет тяжело", img2]);
        commit("setNotificationMessage", "Но мы все приодолеем");
        break;
      case "activeDate19":
        commit("setCompliments", ["Я тебя люблю", img3]);
        commit("setNotificationMessage", "И еще раз люблю");
        break;
      case "activeDate20":
        commit("setCompliments", ["У меня есть вопрос...", img10]);
        commit("setNotificationMessage", "Сделаешь мне кофе?");
        break;
      case "activeDate21":
        commit("setCompliments", ["У меня есть вопрос...", img10]);
        commit("setNotificationMessage", "Сделать тебе кофе?");
        break;
      case "activeDate22":
        commit("setCompliments", ["Твоя жизнь крутаааа-ааа", img10]);
        commit("setNotificationMessage", "Ты дочь Христааааа-ааа");
        break;
      case "activeDate23":
        commit("setCompliments", ["Не торопи события", img10]);
        commit("setNotificationMessage", "У Бога все в свое время");
        break;
      case "activeDate24":
        commit("setCompliments", ["Хорошо, что наши ссоры именно такие", img8]);
        commit("setNotificationMessage", "Без них мы бы выросли)");
        break;
      case "activeDate25":
        commit("setCompliments", [
          "Не забывай, для чего тебя создал Бог",
          img9,
        ]);
        commit("setNotificationMessage", "И мне напоминай)");
        break;
      case "activeDate26":
        commit("setCompliments", ["Ты как instagramm", img10]);
        commit(
          "setNotificationMessage",
          "Нужен особый подход к взаимодействию с тобой)",
        );
        break;
      case "activeDate27":
        commit("setCompliments", ["Ты как telegram", img11]);
        commit("setNotificationMessage", "Идеальна!");
        break;
      case "activeDate28":
        commit("setCompliments", ["Я молюсь о тебе", img12]);
        commit("setNotificationMessage", "Надеюсь, что ты тоже)");
        break;
      case "activeDate29":
        commit("setCompliments", ["Ты моя сладкая булочка", img13]);
        commit("setNotificationMessage", "Мне тебя всегда мало!");
        break;
      case "activeDate30":
        commit("setCompliments", ["Ты как программирование", img14]);
        commit(
          "setNotificationMessage",
          "Иногда легко, но и тяжело тоже бывает)",
        );
        break;
      case "activeDate31":
        commit("setCompliments", ["Я люблю Бога", img15]);
        commit("setNotificationMessage", "А Бог любит меня и дал мне тебя!");
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
