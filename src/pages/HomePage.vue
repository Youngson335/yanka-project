<template>
  <main class="home container">
    <Welcome />
    <EntryText />
  </main>
</template>
<script>
import UserTgInfo from "@/components/UserTgInfo.vue";
import Welcome from "@/components/Welcome.vue";
import Description from "@/components/Modals/Description.vue";
import EntryText from "@/components/EntryText.vue";
export default {
  components: {
    UserTgInfo,
    Welcome,
    Description,
    EntryText,
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
