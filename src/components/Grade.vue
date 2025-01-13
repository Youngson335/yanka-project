<template>
  <div class="grade" v-if="showReaction">
    <div
      class="grade__title"
      v-if="!showReactions"
      @click="showReactions = true"
    >
      <p>оценить</p>
    </div>
    <div class="grade__items" v-if="showReactions && !selectReaction">
      <div
        class="grade__item"
        v-for="reaction of reactions"
        :key="reaction.id"
        @click="setNewReaction(reaction)"
      >
        <img :src="reaction.img" alt="" />
      </div>
    </div>
    <div class="selected__reaction" v-if="selectReaction">
      <img :src="activeReaction.img" alt="" />
    </div>
  </div>
</template>
<script>
import reaction1 from "../assets/new_version_material/reaction/reaction-1.webp";
import reaction2 from "../assets/new_version_material/reaction/reaction-2.webp";
import reaction3 from "../assets/new_version_material/reaction/reaction-3.webp";
import reaction4 from "../assets/new_version_material/reaction/reaction-4.webp";
import reaction5 from "../assets/new_version_material/reaction/reaction-5.webp";
export default {
  data() {
    return {
      reactions: [
        { id: 1, img: reaction1 },
        { id: 2, img: reaction2 },
        { id: 3, img: reaction3 },
        { id: 4, img: reaction4 },
        { id: 5, img: reaction5 },
      ],
      showReactions: false,
      activeReaction: null,
      selectReaction: false,
    };
  },
  props: {
    showReaction: {
      type: Boolean,
    },
  },
  methods: {
    setNewReaction(reaction) {
      this.activeReaction = reaction;
      this.selectReaction = true;
    },
  },
};
</script>
<style lang="scss">
.grade {
  animation: showTitleReaction 0.5s ease;
  overflow: hidden;
  &__title {
    color: black;
  }
  &__items {
    display: flex;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    animation: showReactionItems 0.7s ease;
  }
  &__item {
    & img {
      display: block;
      width: 30px;
    }
  }
  @keyframes showReactionItems {
    0% {
      width: 0px;
    }
    100% {
      width: 150px;
    }
  }
  @keyframes showTitleReaction {
    0% {
      height: 0px;
    }
    70% {
      height: 30px;
    }
    100% {
      height: 27.5px;
    }
  }
}
.selected__reaction {
  & img {
    display: block;
    width: 30px;
    animation: showSelectedReaction 0.5s ease;
  }
  @keyframes showSelectedReaction {
    0% {
      scale: 0;
    }
    70% {
      scale: 1.1;
    }
    100% {
      scale: 1;
    }
  }
}
</style>
