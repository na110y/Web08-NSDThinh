import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vSelect from "vue-select";
library.add(faAngleDown);
import "vue-select/dist/vue-select.css";
import axios from "axios";
import "vue-toast-notification/dist/theme-default.css";
import VueToast from "vue-toast-notification";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
createApp(App)
  .use(router, axios, VueToast)
  .component("font-awesome-icon", FontAwesomeIcon, "v-select", vSelect)
  .mount("#app");
