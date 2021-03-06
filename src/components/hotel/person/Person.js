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
        }/*
        this.state = {
            id:  null,
            codigo:'',
            nombre: ''
        }*/
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
   
    componentDidMount() {
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

    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('d=' + JSON.stringify(this.state))

        const { id } = this.props.match.params
        if (id) {
            this.props.update(this.state, this.props.history).then(r => {
                r.push('/hotel/person2/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/home')
            }, error => {
                throw (error)
            })
        }
    }


    render() {
        return (
            <div className="imgbackground portada">
            <div className="reserva">
                <form onSubmit={this.handleSubmit}>
            <input type="text" className="form2" placeholder="Nombre"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name" />
            <input type="text" className="form2" placeholder="Apellido Paterno"
                            value={this.state.first_name}
                            onChange={this.handleInputChange}
                            name="first_name" />
            <input type="text" className="form2" placeholder="Apellido Materno"
                            value={this.state.last_name}
                            onChange={this.handleInputChange}
                            name="last_name" />
            <input type="text" className="form2" placeholder="DNI" maxLength='8'
                            value={this.state.dni}
                            onChange={this.handleInputChange}
                            name="dni" />
            <input type="text" className="form2" placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email" />
                    <input type="submit" className="form2btn" value="Enviar"/>
                </form>

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