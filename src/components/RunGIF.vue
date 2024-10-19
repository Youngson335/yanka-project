<template>
  <div class="run">
    <img src="../assets/runnig-animate.gif" alt="" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.run {
  position: absolute;
  bottom: 0;
  & img {
    animation: runGIF 15s ease infinite;
    width: 100px;
    @keyframes runGIF {
      0% {
        transform: translateX(-200%);
      }
      100% {
        transform: translateX(450%);
      }
    }
  }
}
</style>
