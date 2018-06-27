import Vue from 'vue'
import Router from 'vue-router'
import Main from '@components/Main'
import MatchList from '@components/MatchList'
import MatchMethod from '@components/MatchMethod'
import MatchRatio from '@components/MatchRatio'
import MatchResult from '@components/MatchResult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/match-list',
      name: 'MatchList',
      component: MatchList
    },
    {
      path: '/match-method',
      name: 'MatchMethod',
      component: MatchMethod
    },
    {
      path: '/match-ratio',
      name: 'MatchRatio',
      component: MatchRatio
    },
    {
      path: '/match-result',
      name: 'MatchResult',
      component: MatchResult
    }
  ]
})
