<template>
  <main class="home container">
    <Welcome />
    <EntryText />
    <DateBtn @editStateShowCard="editStateShowCard" />
    <Card :showCard="showCard" v-if="showCard === true" @showNot="showNot" />
    <Notification v-if="showNotification" />
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
export default {
  components: {
    Welcome,
    Description,
    EntryText,
    DateBtn,
    Card,
    Notification,
  },
  data() {
    return {
      showCard: false,
      showNotification: false,
    };
  },
  computed: {
    ...mapGetters(["getActiveDate"]),
  },
  methods: {
    showNot() {
      this.showNotification = true;
    },
    editStateShowCard(val) {
      this.showCard = val;
    },
  },
  mounted() {
    if (
      localStorage.getItem(`getCompliments${this.getActiveDate}`) === "true"
    ) {
      this.showCard = true;
    } else {
      this.showCard = false;
    }
    localStorage.removeItem(`openCard${this.getActiveDate - 1}`);
    localStorage.removeItem(`selectedCardId${this.getActiveDate - 1}`);

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
