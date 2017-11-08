//import axios from "axios";

import person from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-core/persons/'

export const PERSON_LIST_REQUEST = "PERSON_LIST_REQUEST"
export const PERSON_LIST_SUCCESS = 'PERSON_LIST_SUCCESS'
export const PERSON_LIST_FAILURE = 'PERSON_LIST_FAILURE'

export const personList = () => ({
    type: PERSON_LIST_REQUEST,
})

export const personListSuccess = (list) => ({
    type: PERSON_LIST_SUCCESS,
    list
})

export const personListFailure = error => ({
    type: PERSON_LIST_FAILURE,
    error
})

export const PERSON_ADD = "PERSON_ADD"
export const PERSON_FETCH = "PERSON_FETCH"
export const PERSON_UPDATE = "PERSON_UPDATE"
export const PERSON_DELETE = "PERSON_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        person.get(url, params).then(r => {
            dispatch(personListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(personListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(personListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(personListFailure('Error '+error.message))
            }
            //console.log(error.config);
        })
    }
}

export function save(data, history) {
    console.log('save data:' + JSON.stringify(data))
    return (dispatch) => {
        return person.post(url, data)
            .then((r) => {
                dispatch({
                    "type": PERSON_ADD,
                    "data": r.data //no usado
                })
                history.push('/hotel/persons/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function getById(id) {
    return dispatch => {
        return person.get(`${url}${id}`)
            .then((r) => {
                /*
                dispatch({
                    "type": CATEGORIA_FETCH,
                    "data": r.data 
                })
                */
                return r.data
            })
            .catch((error) => {
                console.log(error)
                //throw (error)
            })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return person.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": PERSON_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/hotel/persons/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function del(_id, history) {
    return dispatch => {
        return person.delete(`${url}${_id}`)
            .then((r) => {
                //console.log('deletex r:' + JSON.stringify(r))
                dispatch({
                    "type": PERSON_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/categorias')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}