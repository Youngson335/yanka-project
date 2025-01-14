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
      localStorage.setItem("modalState", this.getAccept);
      this.$store.commit("setConfirmAccept", JSON.stringify(true));
      if (this.audioBuffer) {
        const source = this.audioContext.createBufferSource();
        source.buffer = this.audioBuffer;
        source.connect(this.gainNode);
        source.start(0);
      }

      this.$router.push("/");
    },
    async loadSound() {
      const response = await fetch(require("@/assets/audio/fx/audio3.mp3"));
      const arrayBuffer = await response.arrayBuffer();
      this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
    },
  },
  async created() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = 0.5;
    this.gainNode.connect(this.audioContext.destination);
    await this.loadSound();
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
