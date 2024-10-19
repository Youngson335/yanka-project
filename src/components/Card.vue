<template>
  <div class="card__block">
    <div
      ref="card"
      class="card"
      v-for="card in checkCompliments"
      :key="card.id"
      :class="{
        'is-flipped':
          flippedCards.includes(card.id) ||
          (card.id === selectedCardId && !canFlip),
        'is-selected': selectedCardId === card.id,
        'is-hidden': selectedCardId && selectedCardId !== card.id,
      }"
      @click="canFlip ? flipCard(card.id) : null"
    >
      <div class="card__inner">
        <div class="card__front">
          <p class="card__text">Выбрать</p>
          <img src="../assets/stikers/stiker-3.webp" alt="" />
        </div>
        <div class="card__back">
          <div class="card__back--text">
            <p>
              <strong>{{ card.compliment }}</strong>
            </p>
          </div>
          <div class="card__back--image">
            <!-- <img :src="card.img" alt="" /> -->
            <video :src="card.img" autoplay muted loop></video>
          </div>
        </div>
      </div>
    </div>
    <div class="card__cat" v-if="showCat">
      <video src="../assets/cat-compliment.webm"></video>
    </div>
  </div>
</template>

<script>
import { nextTick } from "vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      flippedCards: [],
      selectedCardId: null,
      showCat: false,
      canFlip: true, // новое свойство для контроля возможности выбора карточки
      dateStorage: new Date().getDate(),
      openCard: null,
    };
  },
  computed: {
    ...mapGetters(["getCompliments", "getActiveDate"]),
    checkCompliments() {
      const date = new Date();
      localStorage.setItem(
        `compliments`,
        JSON.stringify(this.getCompliments.compliments)
      );
      return JSON.parse(localStorage.getItem("compliments"));
    },
  },
  methods: {
    async loadSound() {
      const response = await fetch(require("@/assets/audio/fx/audio4.mp3"));
      const arrayBuffer = await response.arrayBuffer();
      this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
    },
    flipCard(id) {
      if (this.audioBuffer) {
        const source = this.audioContext.createBufferSource();
        source.buffer = this.audioBuffer;
        source.connect(this.gainNode);
        source.start(0);
      }
      this.$emit("showNot", true);
      this.showCat = true;

      localStorage.setItem(`openCard${this.getActiveDate}`, true);

      if (!this.flippedCards.includes(id)) {
        this.flippedCards.push(id);
      }
      localStorage.setItem(`selectedCardId${this.getActiveDate}`, id);
      this.selectedCardId = id;

      const activeCard = JSON.parse(localStorage.getItem("compliments"));
      const result = activeCard.find((item) => item.id === id);
      if (result) {
        result.show = 1;
        localStorage.setItem("compliments", JSON.stringify(activeCard));
      } else {
        console.log("Карточка не найдена");
      }

      setTimeout(() => {
        this.flippedCards = this.flippedCards.filter((cardId) => cardId === id);
      }, 500);
    },
    checkActiveCard() {
      const activeCard = JSON.parse(localStorage.getItem("compliments"));
      const selected = activeCard.find((card) => card.show === 1);
      if (selected) {
        this.selectedCardId = selected.id;
        this.canFlip = false; // отключаем возможность выбора
        this.flippedCards.push(selected.id); // добавляем активную карточку в flippedCards, чтобы показать ее заднюю сторону
      }
    },
    animationCard() {
      setTimeout(() => {
        const cards = document.querySelectorAll(".card");
        if (cards.length === 0) {
          console.log("No cards found for animation");
        } else {
          cards.forEach((card, index) => {
            console.log(`Animating card #${index}`);
            setTimeout(() => {
              card.classList.add("card__animate");
            }, index * 200);
            setTimeout(() => {
              card.classList.remove("card__animate");
              card.style.display = "block";
            }, 3000);
          });
        }
      });
    },
  },
  mounted() {
    localStorage.removeItem(`openCard${this.getActiveDate - 1}`);
    localStorage.removeItem(`selectedCardId${this.getActiveDate - 1}`);
    console.log("вывел");
    setTimeout(() => {
      nextTick(() => {
        // Проверяем, открыта ли карточка на сегодня
        const openCardStatus = localStorage.getItem(
          `openCard${this.getActiveDate}`
        );
        if (openCardStatus === "true") {
          this.openCard = "true"; // устанавливаем состояние открытой карточки
          this.checkActiveCard(); // проверяем активную карточку при монтировании
          this.canFlip = false; // отключаем возможность выбора
          setTimeout(() => {
            this.showCat = true; // показываем котенка
          }, 1500);
        } else {
          this.openCard = null; // сбрасываем состояние открытой карточки
          this.canFlip = true; // разрешаем выбор карточек
        }
        if (
          localStorage.getItem(`selectedCardId${this.getActiveDate}`) !== null
        ) {
          setTimeout(() => {
            this.selectedCardId = Number(
              localStorage.getItem(`selectedCardId${this.getActiveDate}`)
            );
          }, 1000);
        } else {
          this.animationCard();
        }
      });
    }, 1000);
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
@mixin default__position($content, $align) {
  display: flex;
  justify-content: $content;
  align-items: $align;
}
.card {
  @include default__position(center, center);
  background: white;
  color: black;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  perspective: 1000px;
  cursor: pointer;
  margin-bottom: 50px;
  transition: width 0.6s, transform 0.6s, opacity 0.5s;
  display: none;
  margin-bottom: 60px;
  &__cat {
    margin-top: 50px;
    animation: showCard 0.7s ease;
    & video {
      width: 100px;
    }
  }
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    display: flex;
    justify-content: center;
  }

  &__front,
  &__back {
    position: absolute;
    width: 100%;
    backface-visibility: hidden;
    padding: 10px;
    border-radius: 25px;
    max-width: 300px;
    margin: 0 auto;
  }

  &__front {
    background-color: rgb(63 63 63 / 52%);
    color: #efefef;
    border: 1px solid #b6b6b6;
    font-weight: bold;
    overflow: hidden;
    backface-visibility: hidden;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & img {
      width: 30px;
    }
  }

  &__back {
    background-color: #4b4b4b52;
    transform: rotateY(180deg);
    overflow: hidden;
    z-index: 2;
    color: #ede8e8;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &--text {
      font-size: 20px;
      font-weight: 900;
      text-align: start;
      // margin-top: 10px;
      // margin-left: 10px;
      margin-right: 10px;
    }
    &--image {
      display: flex;
      justify-content: end;
      align-items: center;
      // & img {
      //   width: 70px;
      // }
      & video {
        width: 60px;
        border-radius: 20px;
      }
    }
  }
  &__text {
    position: relative;
    z-index: 1;
  }
  &__trava {
    width: 100%;
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    margin: 0 auto;
    opacity: 0.9;
  }
  &__trava2 {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: -40px;
    z-index: -2;
    opacity: 0.7;
    filter: blur(3px);
  }

  &.is-flipped .card__inner {
    transform: rotateY(180deg);
  }

  &.is-selected {
    width: 100%;
    opacity: 1;
    transition: opacity 0.5s, width 0.6s;
    display: flex !important;
  }

  &.is-hidden {
    display: none !important;
    visibility: hidden;
    transition: opacity 0.5s ease;
  }
}
.card__animate {
  animation: showCard 0.7s ease;
  transition: all 0.5s ease;
  display: flex !important;
}
.is-selected {
  animation: showCard 0.7s ease;
}
@keyframes showCard {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.card__block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
</style>
