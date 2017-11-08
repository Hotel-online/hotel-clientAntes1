//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-hotel/clientes/'

export const CLIENTE_LIST_REQUEST = "CLIENTE_LIST_REQUEST"
export const CLIENTE_LIST_SUCCESS = 'CLIENTE_LIST_SUCCESS'
export const CLIENTE_LIST_FAILURE = 'CLIENTE_LIST_FAILURE'


export const clienteListSuccess = (list) => ({
    type: CLIENTE_LIST_SUCCESS,
    list
})

export const clienteListFailure = error => ({
    type: CLIENTE_LIST_FAILURE,
    error
})

export const CLIENTE_UPDATE = "CLIENTE_UPDATE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(clienteListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(clienteListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(clienteListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(clienteListFailure('Error '+error.message))
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
                    "type": CLIENTE_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/hotel/cliente/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

