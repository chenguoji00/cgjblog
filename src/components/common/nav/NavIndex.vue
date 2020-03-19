<template>
  <nav-bar themecolor="#000">
    <template slot="navcenter">
      <img
        src="//csdnimg.cn/cdn/content-toolbar/csdn-logo_.png?v=20190924.1"
        width="140px"
        height="50px"
        alt="我是图标"
      />
    </template>
    <template slot="navl">
      <nav-bar-item :navbarArr="navbarArrL" navcolor="black"></nav-bar-item>
    </template>
    <template slot="navr">
      <nav-bar-item :navbarArr="navbarArrR" navcolor="black"></nav-bar-item>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "./NavBar";
import NavBarItem from "./NavBarItem";
export default {
  name: "NavIndex",
  components: {
    NavBar,
    NavBarItem
  },
  data() {
    return {
      loginState: false,
      navbarArrL: [
        {
          path: "/Home",
          name: "首页",
          index: 10,
          auth: true
        },
        {
          path: "/Home/indexin",
          name: "博客",
          index: 9,
          auth: true
        },
        {
          path: "/home2",
          name: "学院",
          index: 3,
          auth: true
        },
        {
          path: "/home2",
          name: "下载",
          index: 3,
          auth: true
        },
        {
          path: "/home2",
          name: "论坛",
          index: 4,
          auth: true
        },
        {
          path: "/Home/about",
          name: "关于",
          index: 3,
          auth: true
        }
      ],
      navbarArrR: [
        {
          path: "/Home/login",
          name: "登录",
          index: 1,
          auth: false
        },
        {
          path: "/home1",
          name: "注册",
          index: 2,
          auth:  false
        }
      ]
    };
  },
  watch: {

  }
};
</script>

<style scoped></style>
