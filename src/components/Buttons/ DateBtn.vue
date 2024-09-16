<template>
  <div class="date-btn">
    <button class="date-btn__button">Получить пожелание на {{ date }}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  methods: {
    getDate() {
      const currentDate = new Date();
      const date = currentDate.getDate();
      const month = currentDate.getMonth();
      if (this.date <= 9) {
        this.date = `${date}.0${month}`;
      } else {
        this.date = `${date}.${month}`;
      }
    },
  },
  created() {
    this.getDate();
  },
};
</script>
<style lang="scss">
.date-btn {
  margin-bottom: 40px;
  &__button {
    font-size: 19px;
    font-family: "Comfortaa", sans-serif;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgb(214, 147, 157);
    color: white;
  }
}
</style>
