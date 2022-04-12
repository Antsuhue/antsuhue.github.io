import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import notFound from '../views/Erro404.vue'


const routes = [
  {
    path: '/notauthorized',
    name: 'Not Authirized',
    component: () => import( '../views/NotAuthorized.vue'),
    meta:{
      auth: true,
      user: true,
      admin: false
    }
  },
  {
    path: '/Erro404',
    name: 'Not Found',
    component: notFound,
    meta:{
      auth: false,
      user: false,
      admin: false
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: "/Erro404"
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      auth: false,
      user: false,
      admin: false
    }
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/Create.vue'),
    meta:{
      auth: false,
      user: false,
      admin: false
    }
  },
  {
    path: '/indexAdm',
    name: 'Inidex',
    component: () => import( '../views/inicial.vue'),
    meta:{
      auth: true,
      user: false,
      admin: true
    }
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/InicialUsuario.vue'),
    meta:{
      auth: true,
      user: true,
      admin: false
    }
  },
  
  {
    path: '/settings',
    name: 'settings',
    component: () => import( '../views/Config.vue'),
    meta:{
      auth: true,
      user: false,
      admin: true
    }
  },
  {
    path: '/sendpassword',
    name: 'SendPassword',
    component: () => import( '../views/EnviarSenha.vue'),
    meta:{
      auth: false,
      user: false,
      admin: false
    }
  },
  {
    path: '/editpassword',
    name: 'Senha',
    component: () => import( '../views/Senha.vue')
  },
  {
    path: '/verification',
    name: 'verification',
    component: () => import('../views/Verification.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import('../views/EmailConfirmation.vue')
  },
  {
    path: '/expired',
    name: 'expired',
    component: () => import('../views/LinkExpirado.vue')
  },
  {
    path: '/changeConfirmation',
    name: 'changeConfirmation',
    component: () => import('../views/ChangeConfirmation.vue')
},
{
  path: '/requestEmail',
  name: 'RequestEmail',
  component: () => import('../views/RequestEmail.vue')
},
{
  path: '/managementcards',
  name: 'managementCards',
  component: () => import('../views/GestaoCards.vue'),
  meta:{
    auth: true,
    user: true,
    admin: false
  }
},
{
  path: '/edituser',
  name: 'edituser',
  component: () => import('../views/EditarUser.vue'),
  meta:{
    auth: true,
    user: false,
    admin: true
  }
},

// ,
// {
//   path: '/teste',
//   name: 'teste',
//   component: () => import('../views/testeMenu.vue')
// }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
