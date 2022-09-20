import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import UserLoginView from "../views/auth/UserLoginView.vue";
import CreatePostView from "../views/post/CreatePostView.vue";
import UserProfileView from "../views/auth/UserProfileView.vue";
import UserRegisterView from "../views/auth/UserRegisterView.vue";
import CommunityInfoView from "../views/community/CommunityInfoView.vue";
import EditCommunityView from "../views/community/EditCommunityView.vue";
import CreateCommunityView from "../views/community/CreateCommunityView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    name: "login",
    path: "/login",
    component: UserLoginView,
  },
  {
    name: "register",
    path: "/register",
    component: UserRegisterView,
  },
  {
    name: "profile-view",
    path: "/profile/:userId",
    component: UserProfileView,
  },
  {
    name: "community-dashboard",
    component: DashboardView,
    path: "/dashboard/:communityId",
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: DashboardView,
  },
  {
    name: "create-community",
    path: "/create-community",
    component: CreateCommunityView,
  },
  {
    component: CreatePostView,
    name: "create-community-post",
    path: "/community/:communityId/create-post",
  },
  {
    path: "/create-post",
    component: CreatePostView,
    name: "create-post",
  },
  {
    path: "/update-community/:communityId",
    component: EditCommunityView,
    name: "update-community",
  },
  {
    path: "/community/:communityId/info",
    component: CommunityInfoView,
    name: "community-info-view",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
