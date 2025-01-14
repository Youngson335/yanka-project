<template>
  <div class="description" v-if="getConfirmUser === true">
    <div class="description__text">
      <p>
        Данное приложение доступно не всем и то, что вы сейчас можете им
        пользоваться - это <span>большая честь</span> в первую очередь для
        автора!
      </p>
      <p>
        Если вы попытаетесь поделиться данным приложением со своими
        <span>близкими людьми</span> или <span>подругами</span>, то увы, данные
        лица не смогут им полноценно воспользоваться!
      </p>
      <p>
        Автору так же хочется убедиться в том, что вы готовы уделять свое
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
    <img
      class="description__image"
      src="../../assets/icons/trava_3.png"
      alt=""
    />
  </div>
  <div class="description" v-else>
    <div class="description__text">
      <p>
        Данное приложение предназначено только для <span>особой девушки</span>.
        Если вы сейчас читаете этот текст, значит, вы не являетесь таковой.
      </p>
      <p>
        Если у вас возникли какие-то претензии к разработчику (ето я) - мне вас
        жаль, так как мне <span>лучше не писать!</span> (мне есть с кем
        пообщаться!)
      </p>
    </div>
  </div>
</template>
<script>
import ConfirmBtn from "../Buttons/ConfirmBtn.vue";
import AcceptAgreement from "../AcceptAgreement.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {
    ConfirmBtn,
    AcceptAgreement,
  },
  computed: {
    ...mapGetters(["getConfirmUser"]),
  },
  methods: {
    ...mapActions(["initUserTg"]),
  },
  mounted() {
    this.initUserTg();
  },
};
</script>
<style lang="scss">
@mixin position() {
  position: relative;
  z-index: 2;
}
.description {
  width: 100%;
  max-width: 350px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.5803921569);
  animation: showDescriptionBlock 1s ease;
  position: relative;
  &__text {
    font-weight: 100;
    p {
      margin-bottom: 10px;
      text-align: start;
    }
    span {
      color: rgb(208 94 96);
      font-weight: 900;
      text-decoration: underline;
    }
  }
  &__form {
    @include position();
  }
  &__button {
    @include position();
  }
  &__image {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    z-index: 1;
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
