import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import viewMixin from "./mixins/view.mixin";
import authMixin from "./mixins/auth.mixin";
import messageMixin from "./mixins/message.mixin";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { Icon } from "leaflet";
import { i18n } from "./i18n/i18n";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "leaflet/dist/leaflet.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.mixin(viewMixin);
Vue.mixin(authMixin);
Vue.mixin(messageMixin);

Vue.prototype.$dbg = JSON.stringify(process.env.VUE_APP_DBG_MODE);

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

Vue.config.productionTip = false;

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
