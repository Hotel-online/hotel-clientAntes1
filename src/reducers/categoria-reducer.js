import { CATEGORIA_LIST_REQUEST, CATEGORIA_LIST_SUCCESS, CATEGORIA_LIST_FAILURE } from '../actions/categoria-action'
import { CATEGORIA_ADD, CATEGORIA_FETCH, CATEGORIA_UPDATE } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {}
}

const categoriaReducer = (state = initialState, action) => {
    switch (action.type) {

        case CATEGORIA_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case CATEGORIA_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case CATEGORIA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
  
        default: return state
    }





}

export default categoriaReducer
