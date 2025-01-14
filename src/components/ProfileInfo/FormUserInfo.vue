<template>
  <div class="user__info" v-if="!editInfo">
    <div class="user__name">
      <p>Имя: {{ userInfo.name }}</p>
    </div>
    <div class="user__descript">
      <p>О себе: {{ userInfo.descript }}</p>
    </div>
    <div class="user__age">
      <p>Возраст: {{ userInfo.age }}</p>
    </div>
    <div class="user__status">
      <p>Семейное положение: {{ userInfo.status }}</p>
    </div>
  </div>

  <div class="user__info-edit" v-else>
    <div class="user__name">
      <p>Имя: <input type="text" v-model="userInfo.name" /></p>
    </div>
    <div class="user__descript">
      <p
        style="
          display: flex;
          justify-content: start;
          flex-direction: column;
          align-items: start;
        "
      >
        О себе:
        <textarea style="width: 100%" type="text" v-model="userInfo.descript" />
      </p>
    </div>
    <div class="user__age">
      <p>Возраст: <input type="text" v-model="userInfo.age" /></p>
    </div>
    <div class="user__status">
      <p>Семейное положение: {{ userInfo.status }}</p>
    </div>
  </div>

  <div class="edit__info" @click="startEditInfo">
    <button class="edit__info--button">{{ checkTitleBtn }}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editInfo: false,
      userInfo: {
        name: "Яна",
        descript: "Нет информации",
        age: 20,
        status: "Не замужем",
      },
    };
  },
  computed: {
    checkTitleBtn() {
      return this.editInfo ? "Сохранить" : "Редактировать";
    },
  },
  methods: {
    startEditInfo() {
      if (this.editInfo) {
        localStorage.setItem("user-info", JSON.stringify(this.userInfo));
      }
      this.editInfo = !this.editInfo;
    },
  },
  mounted() {
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      this.userInfo = JSON.parse(storedUserInfo);
    }
  },
};
</script>
<style lang="scss">
@mixin form {
  text-align: start;
  backdrop-filter: blur(7px);
  padding: 20px;
  border: 1px solid #bbafaf;
  border-radius: 20px;
  padding-bottom: 36px;
}
.user__info {
  @include form();
  & div {
    margin-bottom: 10px;
  }
  &-edit {
    @include form();
    & div {
      margin-bottom: 10px;
    }
  }
}
.edit__info {
  display: flex;
  position: absolute;
  bottom: 0px;
  border-left: 1px solid #bbafaf;
  border-bottom: 1px solid #bbafaf;
  &--button {
    backdrop-filter: blur(8px);
    background-color: #ffffff00;
    border: none;
    color: white;
    padding: 10px 20px;
  }
}
</style>
