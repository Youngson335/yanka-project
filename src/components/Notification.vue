<template>
  <div
    ref="notification"
    class="notification"
    v-if="notification === true && enabledId === true"
  >
    <div class="notification__avatar">
      <img src="../assets/avatar.png" alt="" />
    </div>
    <div class="notification__message">
      <div class="message__title">
        <h4><strong>Влад</strong></h4>
      </div>
      <div class="message__text">
        <p>{{ getNotificationMessage }}</p>
      </div>
    </div>
    <div class="notification__time">
      <p>cейчас</p>
    </div>
  </div>
  <div
    ref="chat"
    class="notification__chat"
    v-if="animate === true"
    @click="handleClick"
  >
    <img src="../assets/icons/chat-icon.svg" alt="" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      animate: false,
      audioBuffer: null,
      audioContext: null,
      gainNode: null,
      notification: false,
    };
  },
  computed: {
    ...mapGetters(["getActiveDate", "getNotificationMessage"]),
  },
  props: {
    enabledId: {
      type: Boolean,
    },
  },
  methods: {
    async loadSound() {
      const response = await fetch(require("@/assets/audio/message.mp3"));
      const arrayBuffer = await response.arrayBuffer();
      this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
    },
    handleClick() {
      if (this.audioBuffer) {
        const source = this.audioContext.createBufferSource();
        source.buffer = this.audioBuffer;
        source.connect(this.gainNode);
        source.start(0);
      }
      this.notification = true;
      this.$refs.chat.classList.remove("animate__chat");
      this.$refs.chat.classList.add("hidden__chat");
      setTimeout(() => {
        this.$refs.chat.style.display = "none";
      }, 1000);
      this.hiddenNotification();

      this.$emit("showFaceId", true);
    },
    hiddenNotification() {
      setTimeout(() => {
        this.$refs.notification.classList.add("hidden__notification");
        this.$emit("showGrade", true);
      }, 10000);
      setTimeout(() => {
        this.$refs.notification.style.display = "none";
      }, 10600);
    },
    animateChat() {
      setTimeout(() => {
        if (this.$refs.chat) {
          this.$refs.chat.classList.add("animate__chat");
        }
      }, 2000);
    },
  },
  mounted() {
    if (localStorage.getItem(`openCard${this.getActiveDate}`) === "true") {
      setTimeout(() => {
        this.animate = true;
        this.animateChat();
      }, 3000);
    }
  },
  async created() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = 0.2;
    this.gainNode.connect(this.audioContext.destination);
    await this.loadSound();
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: sfBold;
  src: url("../assets/fonts/sf-bold.ttf");
}
@font-face {
  font-family: sfRegular;
  src: url("../assets/fonts/sf-regular.ttf");
}
.hidden__notification {
  animation: hiddenNotification 0.6s ease !important;
  @keyframes hiddenNotification {
    0% {
      max-width: calc(100% - 40px);
      filter: blur(0px);
      transform: translateY(0px);
    }
    70% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-150px);
      filter: blur(10px);
      max-width: calc(80%);
    }
  }
}
.notification {
  display: flex;
  justify-content: start;
  align-items: center;
  position: fixed;
  top: 15px;
  left: 0;
  right: 0;
  background: rgb(91 91 91 / 70%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(7px);
  padding: 10px;
  max-width: calc(100% - 40px);
  color: rgb(242, 242, 242);
  margin: 0 auto;
  border-radius: 25px;
  box-shadow: 0px 0px 30px -15px black;
  animation: showNotification 0.6s ease;
  @keyframes showNotification {
    0% {
      transform: translateY(-150px);
      filter: blur(15px);
      max-width: calc(80%);
    }
    70% {
      transform: translateY(10px);
    }
    100% {
      max-width: calc(100% - 40px);
      filter: blur(0px);
      transform: translateY(0px);
    }
  }
  &__avatar {
    & img {
      width: 50px;
    }
    margin-right: 10px;
  }
  &__message {
    text-align: start;
  }
  &__time {
    font-family: sfRegular;
    font-size: 12px;
    position: absolute;
    top: 15px;
    right: 15px;
    color: rgb(208 203 203 / 70%);
  }
  .message {
    &__title {
      font-family: sfBold;
      font-size: 15px;
      margin-bottom: 2px;
    }
    &__text {
      font-family: sfRegular;
      line-height: 15px;
      font-size: 13px;
      max-width: 250px;
    }
  }
  &__chat {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    border-radius: 50%;
    padding: 10px;
    width: 60px;
    height: 60px;
    animation: showChat 0.7s ease;
    @keyframes showChat {
      0% {
        transform: translateY(150px);
      }
      60% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    & img {
      width: 40px;
    }
    &::after {
      content: "1";
      width: 25px;
      height: 25px;
      background-color: rgb(109, 35, 36);
      color: white;
      position: absolute;
      top: -3px;
      right: -3px;
      border-radius: 50%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 13px;
    }
  }
}
.animate__chat {
  animation: animateChat 5s ease infinite;
  @keyframes animateChat {
    0% {
      scale: 1;
    }
    25% {
      scale: 1.1;
    }
    50% {
      scale: 1;
    }
    75% {
      scale: 1.1;
    }
    100% {
      scale: 1;
    }
  }
}
.hidden__chat {
  animation: hiddenChat 1s ease;
  @keyframes hiddenChat {
    0% {
      transform: translateY(0px);
    }
    60% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(150px);
    }
  }
}
</style>
