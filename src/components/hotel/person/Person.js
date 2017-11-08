import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { save, getById, update} from '../../../actions/habitacion-action'
import { connect } from 'react-redux'

import {
    Link,
    NavLink
} from 'react-router-dom'

class Person extends Component {

    render() {
        return (
            <div className="imgbackground portada">
            <div className="reserva">
                <input className="form2" type="text"  placeholder="Nombre"></input>
                <input className="form2" type="text"  placeholder="Apellido"></input>
                <input className="form2" type="text"  placeholder="Apellido Paterno"></input>
                <input className="form2" type="text"  placeholder="Apellido Materno"></input>
                <input className="form2" type="text"  placeholder="DNI"></input>
                <input className="form2" type="email" placeholder="E-mail"></input>
                <input className="form2btn"  type="button" name="aceptar" value="Aceptar"/>
            </div>

          </div>
        );
    }
}

export default Person;