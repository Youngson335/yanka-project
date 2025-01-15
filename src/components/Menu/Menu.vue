<template>
  <div class="menu" v-if="checkRoute === null">
    <div class="menu__item" v-for="item of menu" :key="item.id">
      <p @click="goToPage(item.route)">{{ item.title }}</p>
    </div>
  </div>
  <div class="menu menu__profile" v-else>
    <div class="menu__item">
      <p @click="goToPage(checkRoute.path)">{{ checkRoute.title }}</p>
    </div>
  </div>
</template>
<script>
import audio2 from "../../assets/audio/fx/audio2.mp3";
import playSound from "@/audio-scripts/playSoundOnClick";
export default {
  data() {
    return {
      menu: [
        { id: 1, title: "Главная", route: "/" },
        { id: 2, title: "Профиль", route: "/profile" },
      ],
      playSound,
    };
  },
  props: {
    checkRoute: {
      type: Object || null,
    },
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
      this.playSound(audio2, 1);
    },
  },
};
</script>
<style lang="scss">
.menu {
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  max-width: 250px;
  &__item {
  }
  &__profile {
    max-width: 100%;
  }
}
</style>
