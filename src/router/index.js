import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import UserLoginView from "../views/auth/UserLoginView.vue";
import UserRegisterView from "../views/auth/UserRegisterView.vue";
import UserProfileView from "../views/auth/UserProfileView.vue";
import UserLogoutView from "../views/auth/UserLogoutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: UserLoginView,
  },
  {
    path: "/register",
    name: "register",
    component: UserRegisterView,
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfileView,
  },
  {
    path: "/logout",
    name: "logout",
    component: UserLogoutView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
