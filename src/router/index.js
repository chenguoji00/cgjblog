import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("views/home/Home");
const IndexIn = () => import("views/indexin/IndexIn");
const Login = () => import("views/login/Login");
const About = () => import("views/about/About")

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    //配置子路由
    children:[
      { path: 'indexin',
        component: IndexIn,
        meta: {
          isLogin: true
        }
      },
      { path: 'login',
        component: Login,
        meta: {
          isLogin: false
        }
      },
      { path: '/Home/about',
        component: About,
        meta: {
          isLogin: false
        }
      },
    ]

  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
