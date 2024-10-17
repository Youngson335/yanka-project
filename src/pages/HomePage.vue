<template>
  <main class="home container">
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
        />
        <Notification v-if="showNotification" />
      </div>
    </div>
  </main>
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

export default {
  components: {
    Welcome,
    Description,
    EntryText,
    DateBtn,
    Card,
    Notification,
    StartApp,
  },
  data() {
    return {
      showCard: false,
      showNotification: false,
      showApp: false,
      appSleep: false,
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
