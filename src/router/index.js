import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import UserLoginView from "../views/auth/UserLoginView.vue";
import CreatePostView from "../views/post/CreatePostView.vue";
import UserProfileView from "../views/auth/UserProfileView.vue";
import UserRegisterView from "../views/auth/UserRegisterView.vue";
import CreateCommunityView from "../views/community/CreateCommunityView.vue";

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
    path: "/dashboard/:communityId",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/create-community",
    name: "create-community",
    component: CreateCommunityView,
  },
  {
    path: "/community/:communityId/create-post",
    name: "create-community-post",
    component: CreatePostView,
  },
  {
    path: "/create-post",
    name: "create-community-post",
    component: CreatePostView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
