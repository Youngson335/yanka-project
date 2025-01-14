<template>
  <div class="movie__back">
    <img src="./assets/background/back6.jpeg" alt="" />
  </div>
  <router-view @hiddenMenu="showMenu = $event" />
  <Menu
    v-if="currentPath !== '/hello' && showMenu === true"
    :checkRoute="checkPathInProfile"
  />
</template>

<script>
import Menu from "./components/Menu/Menu.vue";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      currentPath: this.$route.path,
      showMenu: true,
    };
  },
  watch: {
    $route(to) {
      this.currentPath = to.path;
    },
  },
  computed: {
    checkPathInProfile() {
      if (this.currentPath === "/profile") {
        return {
          id: 3,
          title: "Назад",
          path: "/",
        };
      } else {
        return null;
      }
    },
  },
  mounted() {
    if (localStorage.getItem("modalState") === null) {
      this.$router.push("/hello");
    }
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
  // background-color: rgb(0 0 0 / 45%);
  height: 100vh;
  user-select: none;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
}
button {
  user-select: none;
  font-family: "Comfortaa", sans-serif;
}
input,
textarea {
  font-family: "Comfortaa", sans-serif;
  font-size: 16px;
  background: none;
  border: none;
  color: white;
  outline: none; /* Убираем обводку при фокусе */
  padding: 0; /* Убираем внутренние отступы */
  margin: 0; /* Убираем внешние отступы */
  border-bottom: 0.5px solid white;
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
  & img {
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
