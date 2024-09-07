<template>
  <main class="home container">
    <div class="home__title">
      <h1>Главная страница</h1>
    </div>
    <div class="home__content">
      <UserTgInfo />
    </div>
  </main>
</template>
<script>
import UserTgInfo from "@/components/UserTgInfo.vue";
export default {
  components: {
    UserTgInfo,
  },
};
</script>
<style lang="scss">
.home {
  &__title {
    margin-bottom: 10px;
  }
}
</style>
