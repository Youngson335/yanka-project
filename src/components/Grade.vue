<template>
  <div class="grade" v-if="showReaction" ref="refGradeBlock">
    <div
      class="grade__title"
      v-if="!showReactions && activeReaction === null"
      @click="checkShowReaction"
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
    <div
      class="selected__reaction"
      v-if="selectReaction || activeReaction !== null"
    >
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
import audio3 from "@/assets/audio/fx/audio3.mp3";
import audio2 from "@/assets/audio/fx/audio2.mp3";
import playSound from "@/audio-scripts/playSoundOnClick";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      reactions: [
        { id: 1, img: reaction1, title: "reaction1" },
        { id: 2, img: reaction2, title: "reaction2" },
        { id: 3, img: reaction3, title: "reaction3" },
        { id: 4, img: reaction4, title: "reaction4" },
        { id: 5, img: reaction5, title: "reaction5" },
      ],
      showReactions: false,
      activeReaction: null,
      selectReaction: false,
      playSound,
    };
  },
  props: {
    showReaction: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters(["getActiveDate"]),
    checkActiveDate() {
      return this.getActiveDate;
    },
  },
  methods: {
    checkShowReaction() {
      this.playSound(audio3, 0.5);
      this.showReactions = true;
    },
    setNewReaction(reaction) {
      this.playSound(audio2, 1);
      this.activeReaction = reaction;
      localStorage.setItem(
        `active-reaction${this.getActiveDate}`,
        JSON.stringify(this.activeReaction)
      );
      this.selectReaction = true;
    },
  },
  mounted() {
    let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    let yesterdayDate = yesterday.getDate();

    const yesterdayLocalReaction = localStorage.getItem(
      `active-reaction${yesterdayDate}`
    );

    if (yesterdayLocalReaction !== null) {
      localStorage.removeItem(`active-reaction${yesterdayDate}`);
    }

    const localReaction = localStorage.getItem(
      `active-reaction${this.getActiveDate}`
    );
    if (localReaction !== null) {
      const reaction = JSON.parse(localReaction);
      let result;
      this.reactions.forEach(function (item) {
        if (item.title === reaction.title) {
          result = item;
        }
      });

      this.activeReaction = result;
      this.$emit("checkLocalReaction", true);
    }
  },
};
</script>
<style lang="scss">
.grade {
  overflow: hidden;
  &__title {
    color: black;
    animation: showTitleReaction 0.5s ease;
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
      opacity: 0;
      height: 0px;
    }
    70% {
      height: 20px;
    }
    100% {
      opacity: 1;
      height: 17.5px;
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
