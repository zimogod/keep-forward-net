import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "swiper/css/swiper.css";
import "animate.css";

import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);

Vue.config.productionTip = false;
// 设置修改页面标题的自定义指令
// eslint-disable-next-line no-unused-vars
const title = Vue.directive("title", {
  inserted: function (el) {
    console.log(el);
    document.title = el.getAttribute("title");
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
