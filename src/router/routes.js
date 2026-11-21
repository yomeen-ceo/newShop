import _ from 'lodash'
// import { languageMap } from '../boot/i18n'

const basicRoutes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Home.vue') },
      { name: 'pos', path: 'pos', component: () => import('pages/Pos.vue') },
      { name: 'pos-admin', path: 'pos-admin', component: () => import('pages/PosAdmin.vue') },
      { name: 'kitchen', path: 'kitchen', component: () => import('pages/Kitchen.vue') },
      { name: 'storage', path: 'storage', component: () => import('pages/Storage.vue') },
      { name: 'cabinet', path: 'cabinet', component: () => import('pages/Cabinet.vue') },
      { name: 'inventory', path: 'inventory', component: () => import('pages/Inventory.vue') },
      { name: 'dashboard', path: 'dashboard', component: () => import('pages/Dashboard.vue') },
      { name: 'web', path: 'web', component: () => import('pages/WebPortal.vue') },
      { name: 'web-admin', path: 'web-admin', component: () => import('pages/WebAdmin.vue') },
      { name: 'reports', path: 'reports', component: () => import('pages/Reports.vue') },
      { name: 'logs', path: 'logs', component: () => import('pages/Logs.vue') }
    ]
  },
  { path: '*', redirect: '/' }
]

const routes = _.cloneDeep(basicRoutes)

// const changeName = ({ prefix, children }) => {
//   _.forEach(children, (item) => {
//     if (!item.children) {
//       item.name = `${prefix}-${item.name}`
//     }
//     if (item.children) {
//       changeName({
//         prefix,
//         children: item.children
//       })
//     }
//   })
// }

// _.forIn(languageMap, (value, key) => {
//   const language = _.kebabCase(key)
//   _.forEach(_.cloneDeep(basicRoutes), (basicRoute) => {
//     basicRoute.path = `/${language}${basicRoute.path}`
//     changeName({ prefix: language, children: basicRoute.children })
//     routes.push(basicRoute)
//   })
// })

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
