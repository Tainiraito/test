import Vue from 'vue'
import App from './App.vue'
//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//取消生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
