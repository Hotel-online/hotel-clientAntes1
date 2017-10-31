import React from 'react'
import {
  Link
} from 'react-router-dom'

import { RouteWithSubRoutes } from '../utils/Routes'
import { Button } from 'reactstrap';

const Content = ({ routes }) => (
  <div>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} exact={route.exact} {...route} />
    ))}
  </div>
)

const Home = ({ routes }) => (
  <div className="imgbackground portada" >
    <div className="formulario">
      // <input className="form" type="date" name="bday" min="2000-01-02" >
      // </input>
      // <input className="form" type="date" name="bday" min="2000-01-02">
      // </input>

      <select className="form">
        <option value="Habitacion">Habitacion</option>
        <option value="Individual">Individual</option>
        <option value="Matrimonial">Matrimonial</option>
        <option value="Triple">Triple</option>
      </select>
      <Link exact to='/hotel/categorias/list' activeClassName="selected"><input className="form btn" type="submit" name="" value="Reservar" /></Link>

    </div>
    <div className="text">
      <h1>Te ayudamos a que pases una noche increible en nuestras fabulosas habitaciones</h1>
    </div>


  </div>

)

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
export { Content, Home, }

// const Client = ({ routes }) => (
//   <div className="imgbackground portada">
//     <div className="reserva">
//       <h2>REGISTRO</h2>
//         <input className="form2" type="text"  placeholder="Nombre"></input>
//         <input className="form2" type="text"  placeholder="Apellido"></input>
//         <input className="form2" type="text"  placeholder="DNI"></input>
//         <input className="form2" type="name"  placeholder="Usuario"></input>
//         <input className="form2" type="password"  placeholder="Contraseña"></input>
//         <input className="form2" type="email" placeholder="E-mail"></input>
//         <input className="form2btn"  type="button" name="aceptar" value="Aceptar"/>
//     </div>
//
//   </div>
//
// )
//
// // Some folks find value in a centralized route config.
// // A route config is just data. React is great at mapping
// // data into components, and <Route> is a component.
//
// ////////////////////////////////////////////////////////////
// // first our route components
// export { Content, Client, }
/*
import {
  BrowserRouter as Router,
  //Route,
  Link
} from 'react-router-dom'
import Routes, {RouteWithSubRoutes} from '../utils/Routes'
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  { path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  { path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]
const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bubblegum">Bubblegum</Link></li>
          <li><Link to="/shoelaces">Shoelaces</Link></li>
        </ul>
        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Routes
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Routes
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)
export default SidebarExample
*/
