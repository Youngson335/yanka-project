<template>
  <transition name="bounce">
    <div class="app__description" v-if="showDescription">
      <Description />
    </div>
  </transition>
  <HomePage v-if="!showDescription" />
  <div class="movie__back">
    <video src="./assets/background/back2.mp4" autoplay muted loop></video>
  </div>
  <router-view />
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import Description from "./components/Modals/Description.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    HomePage,
    Description,
  },
  data() {
    return {
      showDescription: true,
    };
  },
  computed: {
    ...mapGetters(["getConfirmAccept"]),
  },
  watch: {
    getConfirmAccept: {
      immediate: true,
      handler(newValue) {
        this.checkConfirmAccept(newValue);
      },
    },
  },
  methods: {
    checkConfirmAccept(value) {
      this.showDescription = !value;
    },
  },

  mounted() {
    this.checkConfirmAccept(this.getConfirmAccept);
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Comfortaa", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f4f0f0;
  background-color: rgb(0 0 0 / 45%);
  height: 100vh;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow: hidden;
}
.container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}
.movie__back {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  animation: hiddenBlur 3s ease;
  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  @keyframes hiddenBlur {
    0% {
      filter: blur(3px);
    }
    100% {
      filter: blur(0px);
    }
  }
}
.app__description {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.bounce-enter-active,
.bounce-leave-active {
  animation: hiddenModalDescription 1s ease;
}

.bounce-enter,
.bounce-leave-to {
  transform: translateY(0);
  transition: all 1s ease;
  opacity: 0;
}

@keyframes hiddenModalDescription {
  0% {
    transform: translateY(0px);
  }
  30% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(100px);
  }
}
</style>
