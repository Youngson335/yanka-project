<template>
  <section class="user">
    <div class="user__name">
      <p>
        Ваше имя: <strong>{{ userName }}</strong>
      </p>
    </div>
    <div class="user__id">
      <p>
        Ваш telegramID: <strong>{{ userId }}</strong>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      userId: "",
    };
  },
  methods: {
    getUserInfoByTg() {
      if (this.$tg.initDataUnsafe && this.$tg.initDataUnsafe.user) {
        this.userName = this.$tg.initDataUnsafe.user.first_name;
        this.userId = this.$tg.initDataUnsafe.user.id;
      }
    },
  },
  mounted() {
    this.getUserInfoByTg();
  },
};
</script>
<style lang="scss">
.user {
  text-align: start;
  font-size: 20px;
  &__name {
    margin-bottom: 10px;
  }
}
</style>
