import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'
import px2vw from 'postcss-px-to-viewport'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
Vue.use(vueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})
Vue.use(px2vw)

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
