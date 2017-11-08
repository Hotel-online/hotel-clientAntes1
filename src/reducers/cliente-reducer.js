import { CLIENTE_LIST_REQUEST, CLIENTE_LIST_SUCCESS, CLIENTE_LIST_FAILURE } from '../actions/cliente-action'
import { CLIENTE_ADD, CLIENTE_FETCH, CLIENTE_UPDATE } from '../actions/cliente-action'

const initialState = {
    list: [],
    data: {}
}

const clienteReducer = (state = initialState, action) => {
    switch (action.type) {

        case CLIENTE_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case CLIENTE_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case CLIENTE_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case CLIENTE_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        default: return state
    }





}

export default clienteReducer
