import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import home from '@/components/home'
import footer from '@/components/footer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    }
  ]
})
