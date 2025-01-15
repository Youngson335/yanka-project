<template>
  <div class="button__confirm">
    <button @click="saveStateModalDescription" :disabled="checkAccept">
      Подтвердить
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import playSound from "@/audio-scripts/playSoundOnClick";
import audio3 from "../../assets/audio/fx/audio3.mp3";
export default {
  data() {
    return {
      playSound,
    };
  },
  computed: {
    ...mapGetters(["getAccept"]),
    checkAccept() {
      return !this.getAccept;
    },
  },
  methods: {
    async saveStateModalDescription() {
      this.playSound(audio3, 1);
      localStorage.setItem("modalState", this.getAccept);
      this.$store.commit("setConfirmAccept", JSON.stringify(true));
      if (this.audioBuffer) {
      }

      this.$router.push("/");
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
    background: rgb(141 52 53);
    font-family: "Comfortaa", sans-serif;
    color: white;
    transition: all 0.4s ease;
    &:disabled {
      background: rgb(141 52 53);
      color: rgb(208 94 96);
    }
  }
}
</style>
