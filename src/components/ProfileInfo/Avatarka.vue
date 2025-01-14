<template>
  <div class="avatarka">
    <img :src="avatarka" alt="" />
  </div>
</template>
<script>
import ava from "../../assets/avatars/avatar.jpeg";
export default {
  data() {
    return {
      avatarka: ava,
    };
  },
};
</script>
<style lang="scss">
.avatarka {
  border-radius: 50%;
  overflow: hidden;
  width: 150px;
  height: 150px;
  max-width: 200px;
  position: relative;
  border: 5px solid;
  & img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0px;
  }
}
</style>
