<template>
  <transition name="bounce">
    <div class="app__description" v-if="showDescription">
      <Description />
    </div>
  </transition>
</template>
<script>
import Description from "@/components/Modals/Description.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Description,
  },
  data() {
    return {
      showDescription: true,
    };
  },
  computed: {
    ...mapGetters(["getConfirmAccept"]),
  },
  watch: {
    getConfirmAccept: {
      immediate: true,
      handler(newValue) {
        this.checkConfirmAccept(newValue);
      },
    },
  },
  methods: {
    checkConfirmAccept(value) {
      this.showDescription = !value;
    },
  },

  mounted() {
    if (localStorage.getItem("modalState") === "true") {
      this.$router.push("/");
    }
    this.checkConfirmAccept(this.getConfirmAccept);
  },
};
</script>
<style lang=""></style>
