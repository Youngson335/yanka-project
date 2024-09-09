<template>
  <section class="user">
    <div class="user__name">
      <p>
        Ваше имя: <strong>{{ getUserName }}</strong>
      </p>
    </div>
    <div class="user__id">
      <p>
        Ваш telegramID: <strong>{{ getUserId }}</strong>
      </p>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userName: "Влад",
      userId: "19",
    };
  },
  computed: {
    ...mapGetters(["getUserId", "getUserName"]),
  },
  methods: {
    ...mapActions(["initUserTg"]),
  },

  mounted() {
    this.initUserTg();
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
