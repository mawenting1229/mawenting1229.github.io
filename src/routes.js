/**
 *  === routes ===
 *
 *  created at: <?= createdAt ?>
 */
import zola from 'zola'

export default zola.router({
  history: 'hashHistory',
  routes: [
    // ==== router start ==== //
    { path: '/', component: System.import('pages/home') },
    { path: '/index', component: System.import('pages/index') },
    { path: '/list', component: System.import('pages/list') },
    { path: '/about', component: System.import('pages/about') },
    { path: '/article/:path', component: System.import('pages/article') },
    // ==== router end   ==== //
    { path: '*', component: System.import('pages/404') },
  ]
})
