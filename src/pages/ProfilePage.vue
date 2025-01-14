<template>
  <div class="profile">
    <div class="profile__title">
      <h1>Личный кабинет</h1>
    </div>
    <div class="profile__avatarka">
      <Avatarka />
    </div>
    <div class="profile__info">
      <FormUserInfo />
    </div>
  </div>
</template>
<script>
import Avatarka from "@/components/ProfileInfo/Avatarka.vue";
import FormUserInfo from "@/components/ProfileInfo/FormUserInfo.vue";
export default {
  components: {
    Avatarka,
    FormUserInfo,
  },
};
</script>
<style lang="scss">
.profile {
  padding: 20px;
  &__title {
    margin-bottom: 20px;
  }
  &__avatarka {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  &__info {
    position: relative;
  }
}
</style>
