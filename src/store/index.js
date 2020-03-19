import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { },
    isLogin: false
  },
  mutations: {
    updateIsLogin (state,StateL) {
      // 变更状态
      state.isLogin=StateL
    },
    inuser (state , parms) {
      console.log(parms)
      state.user = parms;
    }

  },
  actions: {},
  modules: {}
});
