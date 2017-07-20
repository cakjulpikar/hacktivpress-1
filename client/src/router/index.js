import Vue from 'vue'
import Router from 'vue-router'
import ArticleDetail from '@/components/ArticleDetail'
import PostArticle from '@/components/PostArticle'
import ShowAll from '@/components/ShowAll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles/showall',
      name: 'ShowAll',
      components: ShowAll
    },
    {
      path: '/articles/post',
      name: 'PostArticle',
      components: PostArticle
    },
    {
      path: '/articles/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    }
  ]
})
