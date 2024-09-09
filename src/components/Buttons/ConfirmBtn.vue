<template>
  <div class="button__confirm">
    <button @click="saveStateModalDescription" :disabled="checkAccept">
      Подтвердить
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAccept"]),
    checkAccept() {
      return !this.getAccept;
    },
  },
  methods: {
    saveStateModalDescription() {
      localStorage.setItem("stateModal", this.getAccept);
      this.$store.commit("setConfirmAccept", JSON.stringify(true));
    },
  },
};
</script>
<style lang="scss">
.button__confirm {
  display: flex;
  justify-content: end;
  align-items: center;
  & button {
    border: none;
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 7px;
    background: rgb(5 162 43 / 24%);
    font-family: "Comfortaa", sans-serif;
  }
}
</style>
