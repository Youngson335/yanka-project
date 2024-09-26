<template>
  <div class="welcome">
    <div ref="welcomeTrue" class="welcome__title" v-if="stopGame === false">
      <h1 ref="welcomeTitle">
        {{ getGreeting }}, <span>{{ getUserName }}</span>
      </h1>
    </div>
    <div class="welcome__stop" v-else>
      <h2>{{ getUserName }}, спокойной ночи! Возвращайся завтра😴</h2>
    </div>
    <audio ref="backgroundAudio" loop>
      <source src="../assets/audio/atmosphere.wav" type="audio/wav" />
    </audio>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      welcomeText: "",
      stopGame: false,
    };
  },
  computed: {
    ...mapGetters(["getUserName"]),
    getGreeting() {
      const currentHour = new Date().getHours();

      if (currentHour >= 6 && currentHour < 12) {
        return "Доброе утро";
      } else if (currentHour >= 12 && currentHour < 17) {
        return "Добрый день";
      } else if (currentHour >= 17 && currentHour < 23) {
        return "Добрый вечер";
      } else {
        this.stopGame = true;
        this.$emit("sleepApp");
        return "Спокойной ночи";
      }
    },
  },
  methods: {
    ...mapActions(["initUserTg"]),
    addDefaultClass() {
      setTimeout(() => {
        this.$refs.welcomeTitle.classList.add("default-state");
      }, 800);
    },
  },
  mounted() {
    if (this.$refs.welcomeTrue) {
      this.addDefaultClass();
    }
    console.log(this.$refs.welcomeTrue);
    this.initUserTg();

    // Установка громкости
    this.$refs.backgroundAudio.volume = 0.1; // Установите громкость на 10%
    console.log("Громкость аудио:", this.$refs.backgroundAudio.volume); // Проверка громкости

    this.$refs.backgroundAudio.play().catch((error) => {
      console.error("Ошибка воспроизведения аудио:", error);
    });
  },
};
</script>

<style lang="scss">
.welcome {
  margin-bottom: 20px;
  & h1 {
    font-family: "Comforter Brush", cursive;
    font-size: 55px;
    line-height: 60px;
    animation: showTitle 0.8s ease;
    span {
      color: rgb(214, 147, 157);
    }
    @keyframes showTitle {
      0% {
        transform: translateY(-200px);
        transform: rotateX(267deg);
        filter: blur(3px);
      }
      60% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(0px);
        transform: rotateX(0deg);
        filter: blur(0px);
      }
    }
  }
  &__stop {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    & h2 {
      box-shadow: 0px 0px 20px 20px rgb(0 0 0 / 45%);
      background: rgb(0 0 0 / 45%);
      border-radius: 20px;
      padding: 20px;
    }
  }
}
.default-state {
  animation: defaultStateTitle 3s infinite ease !important;

  @keyframes defaultStateTitle {
    0% {
      transform: translateY(0px);
    }
    30% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}
</style>
