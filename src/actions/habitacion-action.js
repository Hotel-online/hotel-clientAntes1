//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-hotel/habitaciones/'

export const CATEGORIA_LIST_REQUEST = "HABITACION_LIST_REQUEST"
export const CATEGORIA_LIST_SUCCESS = 'HABITACION_LIST_SUCCESS'
export const CATEGORIA_LIST_FAILURE = 'HABITACION_LIST_FAILURE'


export const habitacionListSuccess = (list) => ({
    type: CATEGORIA_LIST_SUCCESS,
    list
})

export const habitacionListFailure = error => ({
    type: CATEGORIA_LIST_FAILURE,
    error
})

export const HABITACION_UPDATE = "HABITACION_UPDATE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(categoriaListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(categoriaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(categoriaListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(categoriaListFailure('Error '+error.message))
            }
            //console.log(error.config);
        })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return client.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": CATEGORIA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/categorias/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

