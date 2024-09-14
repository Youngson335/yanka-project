<template>
  <div class="accept__form">
    <div class="accept__text">
      <strong>Принимаю и осознаю работу автора</strong>
    </div>
    <div class="accept__input">
      <input
        @click="setAccept(checkAccept)"
        v-model="checkAccept"
        type="checkbox"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkAccept: false,
    };
  },
  methods: {
    setAccept(val) {
      this.$store.commit("setAcceptCheck", !val);
    },
  },
};
</script>
<style lang="scss">
.accept {
  &__form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 4px;
    margin-bottom: 10px;
  }
  &__text {
    color: rgb(214 147 157);
    font-size: 14px;
    max-width: 200px;
    text-align: start;
  }
  &__input {
    scale: 1.6;
    & input {
    }
  }
}
</style>
