import Vue from 'vue'
import Router from 'vue-router'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    }
  ]
})
