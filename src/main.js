// eslint-disable-next-line import/no-unused-modules
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import Vue from 'vue'

import store from './03-store'
import router from './08-router'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

// configure language
locale.use(lang)

new Vue({
  router,
  store,
  render: createElement => createElement(App)
}).$mount('#app')
