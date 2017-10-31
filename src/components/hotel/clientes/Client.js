import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getList, del } from '../../../actions/categoria-action'
//import { getList, del } from '../../actions/categoria-action'
import { connect } from 'react-redux'

import {
    Link,
    NavLink
} from 'react-router-dom'


class Client extends Component {
    componentWillMount() {
        this.props.getList("")
}

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    handleClick = () => {
        this.props.history.push('/catalogo/categorias/new');
    }

    render() {
        let { list, del } = this.props
        if (list) {

        } else {
            list = []

        }

        return (
          <div className="imgbackground portada">
            <div className="reserva">
                <input className="form2" type="text"  placeholder="Nombre"></input>
                <input className="form2" type="text"  placeholder="Apellido"></input>
                <input className="form2" type="text"  placeholder="DNI"></input>
                <input className="form2" type="email" placeholder="E-mail"></input>
                <input className="form2btn"  type="button" name="aceptar" value="Aceptar"/>
            </div>

          </div>

        );
    }
}
/*List.propTypes = {
    list: PropTypes.array
}*/

const mapStateToProps = (state) => {
    return {
        list: state.categoria.list
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getList: (q) => { dispatch(getList(q)) },
        del: (id, h) => { dispatch(del(id, h)) }
    }
}

export default connect(mapStateToProps, {
     getList,
     del
})(Client)
