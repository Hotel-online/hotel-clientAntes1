//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-hotel/categorias/'

export const CATEGORIA_LIST_REQUEST = "CATEGORIA_LIST_REQUEST"
export const CATEGORIA_LIST_SUCCESS = 'CATEGORIA_LIST_SUCCESS'
export const CATEGORIA_LIST_FAILURE = 'CATEGORIA_LIST_FAILURE'


export const categoriaListSuccess = (list) => ({
    type: CATEGORIA_LIST_SUCCESS,
    list
})

export const categoriaListFailure = error => ({
    type: CATEGORIA_LIST_FAILURE,
    error
})


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

