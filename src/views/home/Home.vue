<template>
  <div class="home" :style="{ contentStyleObj }">
    <nav-index></nav-index>
    <div v-if="$route.path == '/Home'" class="resume">
      <transition
        :duration="{ enter: 1500, leave: 230 }"
        :leave-active-class="'animated ' + leaveanimate"
        :enter-active-class="'animated ' + enteranimate"
        mode="out-in"
      >
        <div class="section" :style="{ contentStyleObj }" v-if="init === 1">
          <div class="sec">
            <Con1></Con1>
          </div>
        </div>
      </transition>
      <transition
        :duration="{ enter: 2500, leave: 300 }"
        :leave-active-class="'animated ' + leaveanimate"
        :enter-active-class="'animated ' + enteranimate"
        mode="out-in"
      >
        <div class="section" :style="{ contentStyleObj }" v-if="init === 2">
          <div class="sec">
            <about></about>
          </div>
        </div>
      </transition>


    </div>
    <router-view></router-view>
    <div class="login-b">
      <div class="next"><i class="iconfont icon-xiala setarrow" ></i></div>
      <div class="link">
        <a href="#" @click="anniu" class="next">关于我们</a>
        <a href="#">联系我们</a>
        <a href="#">人才招聘</a>
        <a href="#">商家入驻</a>
        <a href="#">广告服务</a>
        <a href="#">手机服务</a>
      </div>
    </div>
  </div>
</template>

<script>
import resume from "../resume/resume";
import NavIndex from "../../components/common/nav/NavIndex";
import Con1 from "../resume/compoments/compon1";
import Con2 from "../resume/compoments/compon2";
import About from "../about/About";
export default {
  name: "Home",
  components: {
    resume,
    NavIndex,
    Con1,
    Con2,
    About
  },
  data() {
    return {
      contentStyleObj: {},
      init: 1,
      lastscroll: 0,
      leaveanimate: "zoomOutUp",
      enteranimate: "zoomInDown"
    };
  },
  created() {
    this.contentStyleObj.height = window.innerHeight - 200 + "px";
    console.log(this.contentStyleObj.height);
  },
  methods: {
    anniu() {
      if (this.init == 2) {
        this.init = 1;
      } else {
        this.init = 2;
      }
    }
  }
};
</script>

<style scoped lang="sass">
@import '../../style/sass/theme'

.home
  overflow: hidden
  width: 100%
.resume
  overflow: hidden
.active
  width: 100%
  height: 100%
  background-color: yellow
.login-b
  width: 100%
  height: 250px
  margin: 0 auto
  text-align: center
  line-height: 50px
  position: absolute
  bottom: 10px
  .link
    a
      padding-left: 20px
      color: #555555
      font-size: 12px
      &:hover
        color: #ff1100
  .next
    // .position-bottom;
    .setarrow
      // position:relative;
      .position-bottom
      font-size: 40px
      color: rgba(4, 10, 41, 0.8)
      opacity: .8
      cursor: pointer
      animation: myfirst 5s infinite
.section
  overflow: hidden
@keyframes myfirst
  0%, 20%, 50%, 80%, 100%
    -moz-transform: translateY(0)
    -ms-transform: translateY(0)
    -webkit-transform: translateY(0)
    transform: translateY(0)

  40%
    -moz-transform: translateY(-30px)
    -ms-transform: translateY(-30px)
    -webkit-transform: translateY(-30px)
    transform: translateY(-30px)

  60%
    -moz-transform: translateY(-15px)
    -ms-transform: translateY(-15px)
    -webkit-transform: translateY(-15px)
    transform: translateY(-15px)
</style>