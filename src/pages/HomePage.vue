<template>
  <main class="home container" v-if="true">
    <StartApp @startApp="startApp" />
    <div class="upload__game" v-if="showApp === true">
      <Welcome @sleepApp="sleepApp" />
      <div v-if="appSleep === false">
        <EntryText />
        <DateBtn @editStateShowCard="editStateShowCard" />
        <Card
          :showCard="showCard"
          v-if="showCard === true"
          @showNot="showNot"
          :showReaction="showReaction"
        />
        <Notification
          v-if="showNotification"
          @showFaceId="showFaceId = $event"
          @showGrade="showReaction = $event"
          :enabledId="showFaceId === true ? checkFaceId : false"
        />
      </div>
    </div>

    <div class="face-id__block" v-if="showFaceId">
      <FaceId @checkFaceId="checkFaceId = $event" />
    </div>
  </main>
  <!-- <RunGIF /> -->
</template>
<script>
import Welcome from "@/components/Welcome.vue";
import Description from "@/components/Modals/Description.vue";
import EntryText from "@/components/EntryText.vue";
import DateBtn from "@/components/Buttons/ DateBtn.vue";
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
import Notification from "@/components/Notification.vue";
import StartApp from "@/components/StartApp.vue";
import FaceId from "@/components/FaceId.vue";
// import RunGIF from "@/components/RunGIF.vue";

export default {
  components: {
    Welcome,
    Description,
    EntryText,
    DateBtn,
    Card,
    Notification,
    StartApp,
    FaceId,
    // RunGIF,
  },
  data() {
    return {
      showCard: false,
      showNotification: false,
      showApp: false,
      appSleep: false,
      showUpdateDescription: localStorage.getItem("update"),
      showFaceId: false,
      checkFaceId: false,
      showReaction: false,
    };
  },
  computed: {
    ...mapGetters(["getActiveDate"]),
  },
  methods: {
    sleepApp() {
      this.appSleep = true;
    },
    startApp() {
      this.showApp = true;
    },
    showNot() {
      this.showNotification = true;
    },
    editStateShowCard(val) {
      this.showCard = val;
    },
    infoUpdate() {
      localStorage.setItem("update", true);
    },
  },
  mounted() {
    localStorage.setItem(
      `activeDate${this.getActiveDate}`,
      `activeDate${this.getActiveDate}`
    );
    this.$store.dispatch("compliments/updateCompliments");
    if (
      localStorage.getItem(`getCompliments${this.getActiveDate}`) === "true"
    ) {
      this.showCard = true;
    } else {
      this.showCard = false;
    }
    if (this.showCard === true) {
      this.showNotification = true;
    } else {
      this.showNotification = false;
    }
    localStorage.removeItem(`openCard${this.getActiveDate - 1}`);
    localStorage.removeItem(`selectedCardId${this.getActiveDate - 1}`);
    localStorage.removeItem(`activeDate${this.getActiveDate - 1}`);

    // localStorage.clear();
  },
};
</script>
<style lang="scss">
.home {
  &__title {
    margin-bottom: 10px;
  }
}
</style>
