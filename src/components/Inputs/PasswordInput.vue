<template>
  <div class="password__input" ref="refPasswordInput">
    <label>Введите пароль</label>
    <input type="text" v-model="password" />
    <button @click="onValidatePassword(password)">Отправить</button>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
});

const emits = defineEmits(["update:modelValue", "updatePasswordState"]);

const password = ref("");
const refPasswordInput = ref();

watch(
  () => password.value,
  (newVal) => {
    emits("update:modelValue", newVal);
  }
);

const onValidatePassword = (pass) => {
  if (pass === "1519") {
    emits("updatePasswordState", true);
  } else {
    emits("updatePasswordState", false);
  }
};

setTimeout(() => {
  refPasswordInput.value.style.display = "flex";
}, 2000);
</script>
<style lang="scss">
.password__input {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #6b2a30;
  color: white;
  gap: 10px;
  padding: 10px;
  border-radius: 20px;
  animation: dopShowEntryBlock 0.5s ease;
  & input {
    width: 100%;
    padding: 10px;
  }
  & button {
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    border: none;
  }
}
</style>
