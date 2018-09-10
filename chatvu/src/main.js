import Vue from 'vue'
import App from './App.vue'
import VR from 'vue-resource'
import VueRouter from 'vue-router'
import Multiselect from 'vue-multiselect'
import routes from './route'
import pag from 'laravel-vue-pagination'


import jQuery from 'jquery'
global.jQuery= jQuery
let Boostrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store.js'

Vue.use(VR)
Vue.use(VueRouter)
Vue.component('multiselect', Multiselect)
Vue.component('pagination', pag)

const router = new VueRouter({
  routes,
  mode:'history'
})
router.beforeEach((to, from, next)=>{
  if(!to.matched.length){
    next({name:'dashboard'})
  }
  if(to.path=='/'){
    const ss=window.localStorage.getItem('authUser')
    if(ss!==null){
      next({name:'dashboard'})
    }
  }

  if(to.meta.requiresAuth){//cek apakah url dari route membutuh auth
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if(authUser && authUser.access_token){ //di cek apakah mempunyai access token
      document.title=to.meta.title
      next()    
    }else{
      next({name:'home'})
    }
  }
  next()
})
export const bus =new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store
})
