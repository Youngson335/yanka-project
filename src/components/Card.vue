<template>
  <div class="card__block" v-if="showCard === true">
    <div
      ref="card"
      class="card"
      v-for="card in checkCompliments"
      :key="card.id"
      :class="{
        'is-flipped': flippedCards.includes(card.id),
        'is-selected': selectedCardId === card.id,
        'is-hidden': selectedCardId && selectedCardId !== card.id,
      }"
      @click="flipCard(card.id)"
    >
      <div class="card__inner">
        <div class="card__front">
          <p class="card__text">Выбрать</p>
        </div>
        <div class="card__back">
          <p class="card__compliment--p">{{ card.compliment }}</p>
          <img src="../assets/gifs/cat__two.gif" alt="" />
        </div>
      </div>
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
      showCard: false,
    };
  },
  computed: {
    ...mapGetters(["getCompliments"]),
    checkCompliments() {
      return this.getCompliments.compliments;
    },
  },
  methods: {
    flipCard(id) {
      if (!this.flippedCards.includes(id)) {
        this.flippedCards.push(id);
      }

      this.selectedCardId = id;

      setTimeout(() => {
        this.flippedCards = this.flippedCards.filter((cardId) => cardId === id);
      }, 500);
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
          });
        }
      });
    },
  },
  mounted() {
    setTimeout(() => {
      nextTick(() => {
        this.showCard = true;
        this.animationCard();
      });
    }, 1000);
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
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  &__front,
  &__back {
    position: absolute;
    width: 100%;
    backface-visibility: hidden;
    padding: 10px;
    border-radius: 10px;
  }

  &__front {
    background-color: #f6f6f6;
    color: #333;
  }

  &__back {
    background-color: #fff;
    transform: rotateY(180deg);
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
    display: none;
    visibility: hidden;
    transition: opacity 0.5s ease;
  }
}
.card__animate {
  animation: showCard 0.7s ease;
  transition: all 0.5s ease;
  display: flex !important;
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
