<template>
  <div ref="start" class="start" v-if="showBtn === true">
    <UpdateDescription class="start__info" />
    <div class="start__btn" @click="startGames">
      <div class="start__btn--block">
        <button>
          {{ startText }}
        </button>
        <img src="../assets/new_version_material/characters/tigr.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import UpdateDescription from "./Modals/UpdateDescription.vue";
import playSound from "@/audio-scripts/playSoundOnClick";
import audio3 from "../assets/audio/fx/audio3.mp3";
import startBackgroundAudio from "@/audio-scripts/backgroundAudio";
import vibrateDevice from "@/audio-scripts/vibrate";
export default {
  components: {
    UpdateDescription,
  },
  data() {
    return {
      startText: "Начать",
      showBtn: true,
      isTest: true,
      playSound,
      startBackgroundAudio,
      vibrateDevice,
    };
  },
  methods: {
    async startGames() {
      this.playSound(audio3, 1);
      this.vibrateDevice(200);
      await this.startBackgroundAudio();

      localStorage.setItem("startApp", true);
      this.$refs.start.classList.add("start__animate");

      setTimeout(() => {
        this.$refs.start.style.display = "none";
      }, 500);

      setTimeout(() => {
        this.$emit("startApp");
        this.showBtn = false;
      }, 1000);
    },
  },
  created() {
    if (localStorage.getItem("startApp") === "true") {
      this.startText = "Продолжить";
    } else {
      this.startText = "Начать";
    }
  },
};
</script>
<style lang="scss">
.start {
  // height: 100vh;
  animation: showStartAppBtn 0.5s ease;
  margin: -20px;
  @keyframes showStartAppBtn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  &__info {
    margin-top: 30px;
  }
  &__animate {
    animation: hiddenStartAppBtn 0.5s ease;
    @keyframes hiddenStartAppBtn {
      0% {
        opacity: 1;
        transform: translateY(0px);
      }
      100% {
        opacity: 0;
        transform: translateY(10px);
      }
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    margin-top: 50px;
    &--block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      width: calc(100% - 50px);
      background: #e5e5e517;
      border-radius: 25px;
      max-width: 250px;
      border: 1px solid #c2c2c2;
      position: relative;
      overflow: hidden;
      height: 60px;
    }
    & img {
      width: 50px;
      position: absolute;
      right: 0;
      bottom: 0;
    }

    & button {
      border-radius: 25px;
      border: none;
      font-size: 22px;
      font-family: "Comfortaa", sans-serif;
      transition: all 0.5s ease;
      color: rgb(233, 233, 233);
      font-weight: bold;
      background: none;
      &:active {
        scale: 0.9;
        transition: all 0.5s ease;
      }
    }
  }
}
</style>
