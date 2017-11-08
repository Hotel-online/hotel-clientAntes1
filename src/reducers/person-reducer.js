import { PERSON_LIST_REQUEST, PERSON_LIST_SUCCESS, PERSON_LIST_FAILURE } from '../actions/person-action'
import { PERSON_ADD, PERSON_FETCH, PERSON_UPDATE, PERSON_DELETE } from '../actions/person-action'

const initialState = {
    list: [],
    data: {}
}

const personReducer = (state = initialState, action) => {
    switch (action.type) {

        case PERSON_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case PERSON_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case PERSON_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case PERSON_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case PERSON_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case PERSON_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case PERSON_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default personReducer