import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vuex from "vuex";

// @ts-ignore
import router from "./common/router/index";
// @ts-ignore
import store from "./common/store/index";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
