export default [
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '*',
        name: 'HomePage',
        component: () => import('../pages/home.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
