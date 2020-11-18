import Vue from 'vue'
import VueRouter from "vue-router";
import page1 from '../view/page1.vue';
import page2 from '../view/page2.vue';
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/page1',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '*',
      redirect: '/page2'
    }
  ]
})