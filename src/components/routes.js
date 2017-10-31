import { Content, Home, Romms, Photos, Reservation, Form }
  from './app/AppContent'
import CategoriaList from './hotel/categorias/List'
import Information from './hotel/categorias/Information'
import Client from './hotel/clientes/Client'
import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'home',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'home',
    exact: true,
    component: Home
  },

  {
    path: '/hotel/categorias/list',
    exact: true,
    title: 'Categorias',
    component: CategoriaList
  },
  {
    path: '/informations',
    exact: true,
    title: 'Categorias',
    component: Information
  },

  {
    path: '/form',
    exact: true,
    title: 'Categorias',
    component: Client
  },




]

export { routes, routese }
