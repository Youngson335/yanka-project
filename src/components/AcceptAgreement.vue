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
import audio2 from "../assets/audio/fx/audio2.mp3";
import playSound from "@/audio-scripts/playSoundOnClick";
export default {
  data() {
    return {
      checkAccept: false,
      playSound,
    };
  },
  methods: {
    setAccept(val) {
      this.$store.commit("setAcceptCheck", !val);
      this.playSound(audio2, 1);
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
    color: rgb(208 94 96);
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
