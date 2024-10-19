<template>
  <div class="update">
    <div class="update__block">
      <div class="update__title">
        <h1 class="update__title--h1">Новое обновление!</h1>
        <img src="../../assets/stikers/stiker-1.webp" alt="" />
      </div>
      <div class="update__text">
        <h2>Теперь еще больше котиков!</h2>
        <img src="../../assets/cats-stiker/1.png" alt="" />
      </div>
    </div>
    <div class="update__info">
      <div class="update__list">
        <p>- изменен дизайн приложения</p>
        <p>- добавлены новые котята</p>
        <p>- новые пожелания</p>
        <p>- новые эмоции</p>
      </div>
      <div class="update__list__img">
        <img src="../../assets/stikers/stiker-7.webp" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.update {
  //   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 350px;
  text-align: start;
  margin: 0 auto;
  &__info {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    background: #2b2b27;
    padding: 20px;
    border-radius: 30px;
    position: relative;
  }
  &__list {
    &__img {
      position: absolute;
      bottom: 5px;
      right: 15px;
      animation: scaleUpdateImg 5s ease infinite;
      & img {
        width: 50px;
      }
      @keyframes scaleUpdateImg {
        0% {
          scale: 1;
        }
        25% {
          scale: 1.1;
        }
        50% {
          scale: 1.05;
        }
        75% {
          scale: 1.1;
        }
        100% {
          scale: 1;
        }
      }
    }
  }
  &__block {
    background-color: #323232ba;
    padding: 20px;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  &__title {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & img {
      width: 70px;
      animation: showUpdateImage 2.5s ease infinite;
      @keyframes showUpdateImage {
        0% {
          transform: rotate(10deg);
        }
        50% {
          transform: rotate(-10deg);
        }
        100% {
          transform: rotate(10deg);
        }
      }
    }
  }
  &__text {
    display: flex;
    justify-content: space-between;
    text-align: start;
    position: relative;
    & img {
      position: absolute;
      right: -20px;
      bottom: -21px;
      width: 60px;
    }
  }
}
</style>
