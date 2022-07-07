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
}


export const postSignIn = (data) => dispatch =>{
    axios.post(`https://codealo-commerce-cms.onrender.com/auth/local/register`, data)
    .then( res => dispatch({ type: "SIGN_IN", payload: res.data}))
    .catch(
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error, ingresa un correo electrónico valido!',
            footer: '<a href=""></a>'
            })
    )
}