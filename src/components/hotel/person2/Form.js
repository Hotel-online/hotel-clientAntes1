import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { save, getById, update } from '../../../actions/person-action'

class Form extends Component {
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
                r.push('/hotel/person2/list')
            }, error => {
                throw (error)
            })
        }
    }

    render() {
        //console.log(JSON.stringify(this.props))
        //const { list } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Nombre:
            <input type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name" />
                    </label><br />
                    <label>Apellido Paterno:
            <input type="text"
                            value={this.state.first_name}
                            onChange={this.handleInputChange}
                            name="first_name" />
                    </label><br />
                    <label>Apellido Materno:
            <input type="text"
                            value={this.state.last_name}
                            onChange={this.handleInputChange}
                            name="last_name" />
                    </label><br />
                    <label>DNI:
            <input type="text" maxLength='8'
                            value={this.state.dni}
                            onChange={this.handleInputChange}
                            name="dni" />
                    </label><br />
                    <label>Email:
            <input type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email" />
                    </label>
                    <input type="submit" value="Enviar"/>
                </form>

            </div>
        )
    }
}
Form.propTypes = {
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
})(Form)