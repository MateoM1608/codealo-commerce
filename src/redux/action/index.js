import axios from 'axios'
import Swal from 'sweetalert2'

export const getAllProducts = () => dispatch =>{
    axios.get(`https://codealo-commerce-cms.onrender.com/products`)
    .then(res => dispatch({ type: "GET_ALL_PRODUCTS", payload: res.data}))
}

export const getProductDetail = (slug) => dispatch =>{
    axios.get(`https://codealo-commerce-cms.onrender.com/products/${slug}`)
    .then( res => dispatch({ type: "GET_PRODUCTS_DTL", payload: res.data}))
}

export const getAllCategories = () => dispatch => {
    axios.get(`https://codealo-commerce-cms.onrender.com/categories`)
    .then( res =>  dispatch({ type: "GET_ALL_CATEGORIES", payload: res.data}))
}

export const filterByCategoria = (payload) => {
    return {
        type: "FILTER_BY_CATEGORIES", payload
    }
}

export const postLogIn =  (datas) => async(dispatch) => {

    try{
        const { data } = await axios.post(`https://codealo-commerce-cms.onrender.com/auth/local`, datas)
        dispatch({ type: "LOG_IN", payload: data})
    }catch(err){
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y/o contraseña incorrecta!',
            footer: '<a href=""></a>'
            })
    }
}

export const LogOut = () => {
    localStorage.removeItem("userInfo")
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su sesión se cerro correctamente',
        showConfirmButton: false,
        timer: 1500
      }).then(window.location.replace(''))
}


export const postSignIn = (datas) => async(dispatch) =>{

    try{
        const {data} = axios.post(`https://codealo-commerce-cms.onrender.com/auth/local/register`, datas)
        dispatch({ type: "SIGN_IN", payload: data})
    }

    catch(err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error, ingresa un correo electrónico valido!',
            footer: '<a href=""></a>'
            })
        }
}


export const GetCarById = (id) => dispatch => {
    axios.get(`https://codealo-commerce-cms.onrender.com/carts/${id}`)
    .then( res => dispatch({ type : "GET_CAR_BY_ID", payload: res.data}))
}

export const changeCarById = (id, body) => dispatch => {
    axios.put(`https://codealo-commerce-cms.onrender.com/carts/${id}`, body)
    .then( res => dispatch({ type : "GET_CAR_BY_ID", payload: res.data}))
}

export const createOrder = (body, header) => dispatch => {
    let config = {
        headers: {
            Authorization : `Bearer ${header}`
        }
    }
    axios.post(`https://codealo-commerce-cms.onrender.com/orders`, body , config)
    .then(res => console.log('respuesta compra',res))
}

export const getOrders = (header) => dispatch => {
    let config = {
        headers: {
            Authorization : `Bearer ${header}`
        }
    }
    axios.get(`https://codealo-commerce-cms.onrender.com/orders`, config)
    .then(res => dispatch({type: "GET_ORDERS", payload: res.data}))
    console.log('funca orders')
}