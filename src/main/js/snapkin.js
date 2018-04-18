import Vue from 'vue'
import App from './../vue/App.vue'

import "purecss/build/pure.css";
import "purecss/build/grids-responsive.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
