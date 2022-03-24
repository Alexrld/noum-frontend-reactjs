import axios from 'axios'
import { GET_DATA_PRODUCTS } from './actions'


export const getDataProducts = () => async (dispatch, getState) => {
    const get_product = await axios.get('https://noum-backend.vercel.app/api/products')
    return dispatch({
        type: GET_DATA_PRODUCTS,
        payload: get_product.data
    })
}

export const postDataProduct = (product) => async (dispatch, getState) => {
    try {
        const post_product = await axios.post('https://noum-backend.vercel.app/api/products', product)
        return post_product.data._id
    } catch (error) {
        console.log(error)
    }
}

export const putDataProduct = (id, data) => async (dispatch, getState) => {
    try {
        const put_product = await axios.put(`https://noum-backend.vercel.app/api/products/${id}`, data)
        console.log('ESTAS EN PUT',put_product.data)
    } catch (error) {
        console.log(error)
    }
}

















//CON API FETCH:
/* export const getDataProducts = () => async (dispatch, getState) => {
    const get_product = await (await fetch('https://noum-backend.vercel.app/api/products')).json()
    console.log('Estas usando ACTIONS!!')
    return dispatch({
        type: GET_DATA_PRODUCTS,
        payload: get_product
    })
} */