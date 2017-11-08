import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { save, getById, update} from '../../../actions/person-action'
import { connect } from 'react-redux'

import {
    Link,
    NavLink
} from 'react-router-dom'

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            name: props.data ? props.data.name : '',
            first_name: props.data ? props.data.first_name : '',
            last_name: props.data ? props.data.last_name : '',
            dni: props.data ? props.data.dni : '',
            email: props.data ? props.data.email : ''
        }
    }
    /*
        componentWillReceiveProps = (nextProps) => { // Load Asynchronously
            const { data } = nextProps;
            console.log('componentWillReceiveProps data:' + JSON.stringify(data))
            this.setState({
                id: data.id,
                codigo: data.codigo,
                nombre: data.nombre
            })
        }
    */
    componentWillMount = () => {
        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
            //this.props.getItemAsync(id)

            this.props.getById(id).then(data => {
                console.log('componentWillReceiveProps data:' + JSON.stringify(data))
                this.setState({
                    id: data.id,
                    codigo: data.codigo,
                    nombre: data.nombre
                })
            }).catch(e => {

            });
        }
        */
    }


    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    dni: data.dni,
                    email: data.email
                });
            });
        }
    }



    handleSubmit = (event) => {
        const { id } = this.props.match.params
        if (id) {
            //console.log('handleSubmit state:' + JSON.stringify(this.state))
            this.props.update(this.state, this.props.history)
        } else {
            this.props.save(this.state, this.props.history)
        }
        //this.props.history.push('/categorias/list');
        event.preventDefault();
    }


    render() {
        return (
            <div className="imgbackground portada">
            <div className="reserva" onSubmit={this.handleSubmit}>
                <input className="form2" type="text" value={this.state.name} placeholder="Nombre"></input>
                <input className="form2" type="text" value={this.state.first_name} placeholder="Apellido Paterno"></input>
                <input className="form2" type="text" value={this.state.last_name} placeholder="Apellido Materno"></input>
                <input className="form2" type="text" value={this.state.dni} placeholder="DNI"></input>
                <input className="form2" type="email" value={this.state.email} placeholder="E-mail"></input>
                <input className="form2btn"  type="button" name="aceptar" value="Aceptar"/>
            </div>

          </div>
        );
    }
}


Person.propTypes = {
    data: PropTypes.object
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.person.list.find(item => item.id + '' === props.match.params.id + '')
        }
    }
    return {
        data: null
    }

}

export default connect(mapStateToProps, {
    save,
    getById,
    update

})(Person)