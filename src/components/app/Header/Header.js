import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
class Header extends Component {

    render() {
        return (
            <div>
            <nav className="main">
              <div className="imglogo">
              </div>
              <ul>
                <li><Link to="/home">Inicio</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to='/hotel/categorias/list'>Habitaciones</Link></li>
                <li><Link to="/photos">Fotos</Link></li>
              </ul>
              <span>
                <i className="fa fa-bars fa-2x " aria-hidden="true"></i>
              </span>
            </nav>
          </div>
        );
    }
}

export default Header;

