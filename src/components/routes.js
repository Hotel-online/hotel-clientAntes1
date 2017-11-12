import { Content }
  from './app/AppContent'
import List from './hotel/categorias/List'
import Habitacion from './hotel/habitacion/Habitacion'
import Person from './hotel/person/Person'
import PersonList from './hotel/person2/List'
import PersonForm from './hotel/person2/Form'
import Home from './hotel/home/Home'
import CategoriaList from './hotel/categoria2/List'
import CategoriaForm from './hotel/categoria2/Form'
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
   path: '/hotel',
   //title: 'categorias!',
   component: Content,
   routes: [
     {
       path: '/hotel/categoria2/list',
       //title: 'list cat!',
       component: CategoriaList
     },
     {
       path: '/hotel/categoria2/new',
       //title: 'new cat!',
       component: CategoriaForm
     },
     {
       path: '/hotel/categoria2/edit/:id',
       //title: 'edit cat!',
       component: CategoriaForm
     }
   ]
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

  {
    path: '/hotel',
    title: 'Hotel!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/hotel/person2/list',
        exact: true,
        title: 'Categorias!',
        icon: 'send',
        component: PersonList
      },
      {
        path: '/hotel/person2/new',
        exact: true,
        title: 'Categoria New!',
        icon: 'send',
        component: PersonForm,
        novisible: true
      },
      {
        path: '/hotel/person2/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: PersonForm,
        novisible: true
      },
    ]
  }


]

export { routes, routese }
