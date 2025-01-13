<template>
  <div class="entry" v-if="showEntry === true">
    <p>Утро начинается не</p>
    <br />
    <p ref="lastChild">с кофе...</p>
  </div>
  <div class="entry__two" ref="entryTwo">
    <p>...а с пожеланий на</p>
    <p>этот день!</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showEntry: false,
      currentHour: new Date().getHours(),
    };
  },
  methods: {
    getCurrentHour() {
      console.log(new Date().getHours());
      if (this.currentHour < 23 && this.currentHour > 6) {
        this.showEntry = true;
      } else this.showEntry = false;
    },
  },
  mounted() {
    this.getCurrentHour();
    if (this.showEntry === true) {
      setTimeout(() => {
        this.$refs.lastChild.classList.add("active__child");
      }, 800);
      setTimeout(() => {
        this.$refs.entryTwo.classList.add("first__active");
      }, 1100);
    }
  },
};
</script>
<style lang="scss">
.entry {
  max-width: 230px;
  text-align: start;
  font-size: 18px;
  font-weight: 900;
  position: relative;
  animation: showEntryBlock 1s ease;
  @keyframes showEntryBlock {
    0% {
      transform: translateX(-200vw);
    }
    70% {
      transform: translateX(5vw);
    }
    100% {
      transform: translateX(0vw);
    }
  }
  p:first-child {
    border-bottom-left-radius: 0;
    z-index: 3;
    position: relative;
  }
  p:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    position: relative;
    z-index: 2;
    display: none;
    color: rgb(138 89 156);
    box-shadow: 10px 1px 30px 0px #0000006b;
  }
  & p {
    background: #f6f2f2;
    color: #544c4c;
    border-radius: 10px;
    padding: 7px;
    display: inline-block;
  }
}
.active__child {
  animation: showLastChild 0.5s ease;
  display: inline-block !important;
  transform: translateY(-10px);
  @keyframes showLastChild {
    0% {
      transform: translateY(-25px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
}
.entry__two {
  text-align: end;
  font-size: 18px;
  font-weight: 900;
  position: relative;
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  flex-direction: column;
  display: none;
  margin-bottom: 40px;
  @keyframes dopShowEntryBlock {
    0% {
      opacity: 0;
      transform: translateY(-36px);
    }
    70% {
      transform: translateY(5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  & p {
    background: rgb(138 89 156);
    color: #f6f2f2;
    border-radius: 10px;
    padding: 7px;
    display: inline-block;
  }
  p:first-child {
    border-bottom-right-radius: 0;
    z-index: 3;
    position: relative;
  }
  p:last-child {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    position: relative;
    z-index: 2;
    transform: translateY(-10px);
    box-shadow: 10px 1px 30px 0px #0000006b;
  }
}
.first__active {
  display: flex !important;
  animation: dopShowEntryBlock 0.5s ease;
}
</style>
