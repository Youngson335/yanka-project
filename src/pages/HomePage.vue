<template>
  <main class="home container">
    <Welcome />
    <EntryText />
    <DateBtn @editStateShowCard="editStateShowCard" />
    <Card :showCard="showCard" v-if="showCard === true" />
  </main>
</template>
<script>
import Welcome from "@/components/Welcome.vue";
import Description from "@/components/Modals/Description.vue";
import EntryText from "@/components/EntryText.vue";
import DateBtn from "@/components/Buttons/ DateBtn.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    Welcome,
    Description,
    EntryText,
    DateBtn,
    Card,
  },
  data() {
    return {
      showCard: false,
    };
  },
  methods: {
    editStateShowCard(val) {
      this.showCard = val;
    },
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
