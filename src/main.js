import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import {Vuelidate} from "./common"

Vue.use(Vuelidate);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
