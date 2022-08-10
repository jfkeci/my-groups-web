import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import viewMixin from "./mixins/view.mixin";
import authMixin from "./mixins/auth.mixin";
import messageMixin from "./mixins/message.mixin";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.mixin(viewMixin);
Vue.mixin(authMixin);
Vue.mixin(messageMixin);

Vue.prototype.$dbg = true;

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.headers.common = { "Content-type": `application/json` };

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
