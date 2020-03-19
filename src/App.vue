<template>
  <div id="app">
    <div class="content"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.content {
  margin-top: 50px;
  background-color: pink;
}

</style>
