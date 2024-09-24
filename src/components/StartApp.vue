<template>
  <div ref="start" class="start" v-if="showBtn === true">
    <div class="start__btn" @click="startGames">
      <div class="start__btn--block">
        <button>
          {{ startText }}
        </button>
        <img src="../assets/icons/time.png" alt="" />
      </div>
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
    &--block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      width: calc(100% - 50px);
      background: #e5e5e517;
      border-radius: 25px;
      max-width: 250px;
      background-image: url(../assets/icons/trava_1.png);
      background-position: bottom;
      background-size: contain;
      background-repeat: repeat;
      border: 1px solid #c2c2c2;
    }
    & img {
      width: 40px;
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
