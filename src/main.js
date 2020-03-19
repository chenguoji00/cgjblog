import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import animate from 'animate.css'

Vue.use(animate)
Vue.use(ElementUI);

import "./assets/css/base.css";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if(localStorage.getItem("token")){
    store.commit("updateIsLogin",true)
  }
  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("Flag");

  //如果登录标志存在且为isLogin，即用户已登录
  if (getFlag === "isLogin") {
    //设置vuex登录状态为已登录
    //TODO 这里是需要把vuex的isLogin设置为true，但是现在先这样赋值
    store.commit("updateIsLogin",true);

    next();
  } else {
    //用户想进入需要登录的页面，则定向回登录界面
    if (to.meta.isLogin) {
      next({
        path: "/Home/login"
      });
      //iViewUi友好提示
      ElementUI.Message({
        message: "请先登录",
        type: "warning"
      });
      //用户进入无需登录的界面，则跳转继续
    } else {
      next();
    }
  }
});

router.afterEach(route => {
  window.scroll(0, 0);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
