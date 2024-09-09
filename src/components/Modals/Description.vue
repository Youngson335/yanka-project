<template>
  <div class="description">
    <div class="description__text">
      <p>
        Данное приложение доступно не всем и то, что вы сейчас можете им
        пользоваться - это большая честь в первую очередь для автора!
      </p>
      <p>
        И ему так же хочется убедиться в том, что вы готовы уделять свое
        внимание, пользуясь данным приложением!
      </p>
      <p>Будет прекрасно, если вы это подтвердите чуть ниже!)</p>
    </div>
    <div class="description__form">
      <AcceptAgreement />
    </div>
    <div class="description__button">
      <ConfirmBtn />
    </div>
  </div>
</template>
<script>
import ConfirmBtn from "../Buttons/ConfirmBtn.vue";
import AcceptAgreement from "../AcceptAgreement.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ConfirmBtn,
    AcceptAgreement,
  },
};
</script>
<style lang="scss">
.description {
  width: 100%;
  max-width: 350px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.5803921569);
  animation: showDescriptionBlock 1s ease;
  &__text {
    p {
      margin-bottom: 10px;
      text-align: start;
    }
  }
  @keyframes showDescriptionBlock {
    0% {
      transform: translateY(20px);
      filter: blur(1px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
}
</style>
