import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
class Footer extends Component {

    render() {
        return (
            <div className="footer">
            <div className="footer_seccion">
              <h3>HOTEL 5 ESTRELLAS</h3>
              <p>Con fabulosos cuartos te ofrecemos una buena atención</p>
            </div>
            <div className="footer_seccion">
              <h3>CONTACTENOS</h3>
              <p>Av.Arequipa</p>
              <p>Celular: 957463521</p>
              <p>E-mail: hotel5estrellas.gmail.com</p>

            </div>

          </div>
        );
    }
}

export default Footer;

