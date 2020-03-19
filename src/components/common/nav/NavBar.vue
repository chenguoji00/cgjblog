<template>
  <div class="nav" :style="{ backgroundColor: themecolor }">
    <div>
      <slot name="navcenter"></slot>
    </div>

    <div class="w">
      <div class="nav-l">
        <slot name="navl" v-bind:navcolor="navcolor"></slot>
      </div>
      <div class="nav-r">
        <div style="float:left;">
          <slot name="navr" v-bind:navcolor="navcolor"></slot>
        </div>
        <div class="userlogin" style="float:right;" v-if="$store.state.isLogin">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"
              ><img :src="this.sysUserAvatar" /> 您好：{{
                $store.state.user.user_name
              }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item @click.native="logout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    themecolor: {
      type: String,
      default: "black"
    },
    navcolor: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {
      sysUserAvatar: ""
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit('inuser',{})
      this.$store.commit('updateIsLogin',false)
      this.$router.replace("/Home/login")
    }
  }
};
</script>

<style scoped lang="sass">
@import 'src/style/sass/theme'
.nav
    height: 50px
    width: 100%
    background-color: $blackcolor
    position: fixed
    line-height: $navheight
    left: 0
    top: 0
    transition: all 1s
    img
      float: left
      transform: translateX(100px)
    .nav-l
        margin-left: 40px
        float: left
        a
            color: #fff
            padding-left: 10px
            float: left
            display: block
    .nav-r
        margin-right: 40px
        float : right
        .userlogin
          float: right
          padding-left: 10px
          span
            color: white
            font-size: 16px
            font-weight: 500
        a
            color: #fff
            padding-right: 10px
            float: right
            display: block
</style>
