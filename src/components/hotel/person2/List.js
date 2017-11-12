import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getList, del } from '../../../actions/person-action'
import {
    Link
} from 'react-router-dom'


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            q: "",
        }
    }

    componentWillMount() {
        this.props.getList(this.state.q)
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
        this.props.getList(this.state.q)
    }

    render() {
        
        let { list, del } = this.props
        if (list === null) {
            list = []
        }
        return (
            <div>
                <h2>Person List</h2>
                <label>Buscar:
            <input type="text"
                        value={this.state.q}
                        onChange={this.handleInputChange}
                        name="q" />
                </label>
                <Link to="/hotel/person2/new">New Person</Link>
                <table>
                    <tbody>
                        {list.map((d, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td> {d.name} {d.first_name} {d.last_name} - {d.dni}</td>
                                <td><Link to={`/hotel/person2/edit/${d.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button onClick={() => del(d.id)} > X </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
List.propTypes = {
    list: PropTypes.array
}
const mapStateToProps = (state) => {
    return { list: state.person.list }
}
export default connect(mapStateToProps, {
    getList,
    del
})(List)