import { Content }
  from './app/AppContent'
import List from './hotel/categorias/List'
import Habitacion from './hotel/habitacion/Habitacion'
import Person from './hotel/person/Person'
import Home from './hotel/home/Home'
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
    exact: true,
    title: 'Categorias',
    component: Home
  },
  {
    path: '/hotel/categorias/list',
    exact: true,
    title: 'Categorias',
    component: Habitacion
  },
  {
    path: '/informations',
    exact: true,
    title: 'Categorias',
    component: List
  },

  {
    path: '/form',
    exact: true,
    title: 'Categorias',
    component: Person
  },




]

export { routes, routese }
