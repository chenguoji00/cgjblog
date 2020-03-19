<template>
  <div class="navbarItem">
    {{$store.state.isLogin}}
    <div v-for="(item,index) in navbarArr" class="left" v-if="!($store.state.isLogin && item.index==1 ||$store.state.isLogin && item.index==2)"  >
      <router-link  :to="item.path" :class="{active:item.path==$route.path}">{{ item.name }}</router-link>
<!--      :style="{color:navcolor}"-->
    </div>

  </div>
</template>
<script>
export default {
  name: "navbarItem",
  props: {
    navbarArr: {
      type: Array,
      default: () => []
    },
    navcolor:{
      type:String,
      default:'#fff'
    }
  },
};
</script>

<style scoped lang="sass">
  @import 'src/style/sass/theme'
  .left
    float: left
    margin-left: 12px
  .navbarItem
    a
      display: block
      height: 50px
      padding: 0 4px
      &:hover
        background-color: #666
        color: #f10000
  .active
    color: #f10000
    border-bottom: 2px solid #f10000
</style>
