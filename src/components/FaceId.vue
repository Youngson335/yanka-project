<template>
  <div class="face-id" ref="faceID">
    <div class="face-id__description">
      <p>Проверка на милую девушку</p>
      <img src="../assets/new_version_material/plant/list2.webp" alt="" />
    </div>
    <div class="face-id__item">
      <img src="../assets/new_version_material/face-id/face-id.gif" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showFaceId: true,
    };
  },
  mounted() {
    const faceID = this.$refs.faceID;
    setTimeout(() => {
      faceID.classList.add("face-id__hidden");
      this.showFaceId = false;
    }, 3500);
  },
  watch: {
    showFaceId(newVal) {
      const faceID = this.$refs.faceID;
      setTimeout(() => {
        faceID.style.display = "none";
        this.$emit("checkFaceId", true);
      }, 1000);
    },
  },
};
</script>
<style lang="scss">
.face-id {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #414143;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 1px -2px 10px #5c5a5a8a;
  overflow: hidden;
  animation: showModalFaceId 1s ease;
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    width: 100px;
    height: 100px;
    animation: showFaceId 0.7s ease;
    position: relative;
    bottom: 15px;
    & img {
      position: absolute;
      top: -10px;
    }
  }
  &__description {
    margin-bottom: 40px;
    padding-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    & p {
      font-size: 24px;
      font-weight: 900;
      text-align: start;
    }
    & img {
      width: 70px;
    }
  }
  &__hidden {
    animation: hiddenModalFaceId 1s ease;
  }
  @keyframes showFaceId {
    0% {
      opacity: 0;
      scale: 0;
    }
    70% {
      scale: 1.2;
    }
    100% {
      opacity: 1;
      scale: 1;
    }
  }
  @keyframes showModalFaceId {
    0% {
      height: 0px;
    }
    70% {
      height: 210px;
    }
    100% {
      height: 195px;
    }
  }
  @keyframes hiddenModalFaceId {
    0% {
      height: 195px;
    }
    70% {
      height: 210px;
    }
    100% {
      height: 0px;
    }
  }
}
</style>
