<template>
  <div class="card__block">
    <div
      ref="card"
      class="card"
      v-for="card of checkCompliments"
      :key="card.id"
    >
      <div class="card__compliment">
        <p class="card__compliment--p">{{ card.compliment }}</p>
      </div>
      <div class="card__picture">
        <img
          class="card__picture--img"
          src="../assets/gifs/cat__two.gif"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { nextTick } from "vue";
export default {
  computed: {
    ...mapGetters(["getCompliments"]),
    checkCompliments() {
      return this.getCompliments.compliments;
    },
  },
  methods: {
    animationCard() {
      setTimeout(() => {
        const card = document.querySelectorAll(".card");
        elem.classList.add("card__animate");
      }, 100);
    },
  },
  mounted() {
    nextTick(() => {
      this.animationCard();
    });
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
  @include default__position(space-between, center);
  background: white;
  color: black;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  &__picture {
    @include default__position(end, center);
    &--img {
      width: 50px;
    }
  }
  &__block {
    @include default__position(space-between, center);
    flex-direction: column;
  }
  &__compliment {
    color: black;
    font-weight: 900;
  }
}
</style>
