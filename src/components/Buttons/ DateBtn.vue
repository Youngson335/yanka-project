<template>
  <div ref="invitationBlock" class="invitation__block" v-if="showBtn === true">
    <div class="invitation">
      <div class="invitation__picture">
        <!-- <img
        class="invitation__picture--img"
        src="../../assets/gifs/cursor-cat.gif"
        alt=""
      />       -->
        <!-- <img
        class="invitation__picture--img"
        src="../../assets/cats-video/5.webm"
        alt=""
      /> -->
        <img
          class="invitation__picture--video"
          src="../../assets/new_version_material/characters/flower-life2.webp"
          autoplay
          muted
          loop
        />
      </div>
      <div class="invitation__button">
        <button class="invitation__button--btn" @click="handleClick">
          Получить пожелание на {{ date }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      date: null,
      audioContext: null,
      gainNode: null,
      audioBuffer: null,
      showBtn: true,
      dateStorage: new Date().getDate(),
    };
  },
  computed: {
    ...mapGetters(["getActiveDate"]),
  },
  methods: {
    getDate() {
      const currentDate = new Date();
      const date = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      this.date = `${date}.${month < 10 ? "0" + month : month}`;
    },
    async loadSound() {
      const response = await fetch(require("@/assets/audio/fx/audio2.mp3"));
      const arrayBuffer = await response.arrayBuffer();
      this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
    },
    handleClick() {
      if (this.audioBuffer) {
        const source = this.audioContext.createBufferSource();
        source.buffer = this.audioBuffer;
        source.connect(this.gainNode);
        source.start(0);
        this.$refs.invitationBlock.classList.add("invitation__hidden");
        setTimeout(() => {
          this.showBtn = false;
        }, 1000);
        this.$emit("editStateShowCard", true);
      }
      localStorage.setItem(`getCompliments${this.getActiveDate}`, true);
    },
    showInvitationBlock() {
      if (this.$refs.invitationBlock) {
        this.$refs.invitationBlock.style.display = "block";
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.showInvitationBlock();
    }, 1300);

    localStorage.removeItem(`getCompliments${this.getActiveDate - 1}`); //заменить

    if (localStorage.getItem(`getCompliments${this.getActiveDate}`) == "true") {
      this.showBtn = false;
    } else {
      this.showBtn = true;
    }
  },
  async created() {
    this.getDate();
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = 1.2;
    this.gainNode.connect(this.audioContext.destination);
    await this.loadSound();
  },
};
</script>

<style lang="scss">
.invitation {
  background-color: white;
  // padding: 10px;
  max-width: 350px;
  margin: 0 auto;
  animation: showInvitation 1s ease;
  position: relative;
  border-radius: 20px;
  @keyframes showInvitation {
    0% {
      filter: blur(10px);
      scale: 0;
    }
    50% {
      scale: 1.05;
    }
    100% {
      filter: blur(0px);
      scale: 1;
    }
  }
  &__block {
    display: none;
  }
  &__cat {
    animation: showInvitation 1s ease;
    & video {
      width: 150px;
    }
  }
  &__hidden {
    animation: hiddenInvitation 1s ease;
    @keyframes hiddenInvitation {
      0% {
        filter: blur(0px);
        scale: 1;
      }
      50% {
        filter: blur(5px);
        scale: 1.05;
      }
      100% {
        filter: blur(10px);
        scale: 0;
      }
    }
  }
  &__button {
    width: 100%;
    &--btn {
      font-size: 19px;
      font-family: "Comfortaa", sans-serif;
      padding: 10px;
      border: none;
      background-color: rgb(109, 35, 36);
      color: white;
      width: 300px;
      transition: all 0.2s ease;
      margin: 10px;
      text-align: start;
      text-wrap: pretty;
      border-radius: 10px;
      &:active {
        transform: scale(0.95);
      }
    }
  }
}
.invitation__picture {
  // width: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // margin-bottom: 5px;
  &--img {
    width: 300px;
  }
  &--video {
    position: absolute;
    top: -12px;
    right: 0;
    width: 80px;
  }
}
</style>
