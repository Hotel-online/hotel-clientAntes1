import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { save, getById, update } from '../../../actions/categoria-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            codigo: props.data ? props.data.codigo : '',
            nombre: props.data ? props.data.nombre : ''
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
                    nombre: data.nombre,
                    precio: data.precio,
                    descripcion: data.descripcion
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
                r.push('/hotel/categoria2/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/hotel/categoria2/list')
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
                            value={this.state.nombre}
                            onChange={this.handleInputChange}
                            name="nombre" />
                    </label><br />
                    <label>Precio:
            <input type="text"
                            value={this.state.precio}
                            onChange={this.handleInputChange}
                            name="precio" />
                    </label><br />
                    <label>Descripcion:
            <input type="text"
                            value={this.state.descripcion}
                            onChange={this.handleInputChange}
                            name="descripcion" />
                    </label>
                    <input type="submit" value="Submit" />
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
            data: state.categoria.list.find(item => item.id + '' === props.match.params.id + '')
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
