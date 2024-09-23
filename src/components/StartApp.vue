<template>
  <div ref="start" class="start" v-if="showBtn === true">
    <div class="start__btn" @click="startGames">
      <button>
        {{ startText }}
        <img src="../assets/gifs/trava.gif" alt="" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startText: "Начать",
      showBtn: true,
    };
  },
  methods: {
    startGames() {
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
  height: 100vh;
  backdrop-filter: blur(5px);
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
    & button {
      padding: 10px 20px;
      border-radius: 25px;
      border: none;
      width: calc(100% - 50px);
      font-size: 22px;
      font-family: "Comfortaa", sans-serif;
      transition: all 0.5s ease;
      color: #4b4848;
      position: relative;
      padding-bottom: 23px;
      overflow: hidden;
      font-weight: bold;
      & img {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: -2px;
      }
      &:active {
        scale: 0.9;
        transition: all 0.5s ease;
      }
    }
  }
}
</style>
