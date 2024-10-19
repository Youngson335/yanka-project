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
      if (this.audioBuffer) {
        const source = this.audioContext.createBufferSource();
        source.buffer = this.audioBuffer;
        source.connect(this.gainNode);
        source.start(0);
      }
    },
    async loadSound() {
      const response = await fetch(require("@/assets/audio/fx/audio2.mp3"));
      const arrayBuffer = await response.arrayBuffer();
      this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
    },
  },
  async created() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = 1.1;
    this.gainNode.connect(this.audioContext.destination);
    await this.loadSound();
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
    color: rgb(129 145 80);
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
