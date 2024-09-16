<template>
  <main class="home container">
    <Welcome />
    <EntryText />
    <DateBtn />
    <div class="picture__waiting">
      <img
        class="picture__waiting--img"
        src="../assets/gifs/cursor-cat.gif"
        alt=""
      />
    </div>
  </main>
</template>
<script>
import Welcome from "@/components/Welcome.vue";
import Description from "@/components/Modals/Description.vue";
import EntryText from "@/components/EntryText.vue";
import DateBtn from "@/components/Buttons/ DateBtn.vue";
export default {
  components: {
    Welcome,
    Description,
    EntryText,
    DateBtn,
  },
};
</script>
<style lang="scss">
.home {
  &__title {
    margin-bottom: 10px;
  }
}
.picture__waiting {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  &--img {
    width: 300px;
  }
  @keyframes showPicture {
  }
}
</style>
