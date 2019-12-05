import Vue from "vue";
import App from "./App.vue";
import "./css/App.css";
import router from "./router";
import { store } from "./store/store";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
