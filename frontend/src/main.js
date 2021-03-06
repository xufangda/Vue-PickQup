// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 在使用click事件时，某些移动端会有300ms延迟，通过引入库可以解决这个问题
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css' // 统一各浏览器表现的基本css
import 'styles/border.css' // 解决高倍评一像素边框的问题
import 'styles/iconfont.css'
import 'styles/animate.css'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
