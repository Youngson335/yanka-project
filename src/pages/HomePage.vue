<template>
  <main class="home container">
    <Welcome />
    <!-- <div class="home__content">
      <UserTgInfo />
    </div> -->
  </main>
</template>
<script>
import UserTgInfo from "@/components/UserTgInfo.vue";
import Welcome from "@/components/Welcome.vue";
import Description from "@/components/Modals/Description.vue";
export default {
  components: {
    UserTgInfo,
    Welcome,
    Description,
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
