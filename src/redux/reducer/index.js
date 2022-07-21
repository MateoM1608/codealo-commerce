import Swal from 'sweetalert2'

const initialState = {
    allProducts: [],
    products:[],
    detailProduct: [],
    categories: [],
    car: [],
    carRaw: [],
    orders: []

}

function rootReducer(state = initialState, action){
    switch(action.type) {
        case "GET_ALL_PRODUCTS":
            return{
                ...state,
                allProducts: action.payload,
                products: action.payload
            }
        case "GET_PRODUCTS_DTL":
            return{
                ...state,
                detailProducts: [action.payload]
            }
        case "GET_ALL_CATEGORIES":
            return{
                ...state,
                categories: action.payload
            }
        case "FILTER_BY_CATEGORIES":
            const ProductsAll = state.allProducts;
            const productsFilter = action.payload ===  "All" ? ProductsAll : ProductsAll.filter( p => p.categories[0].name === action.payload)
            return{
                ...state,
                products: productsFilter
            }
        case "LOG_IN":
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Iniciaste sesión correctamente',
                showConfirmButton: false,
                timer: 1500
              }).then(window.location.replace(''))
              
            break;
        case "SIGN_IN":
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario creado correctamente',
                showConfirmButton: false,
                timer: 1500
              }).then(window.location.replace(''));
              break;
        case "GET_CAR_BY_ID":
            let carrito = []
            action.payload.products_in_cart.map(c => carrito.push({product:{id: c.product.id},quantity: c.quantity }))
            return{
                ...state,
                car : action.payload,
                carRaw: carrito
            }
        case "GET_ORDERS":
            return{
                ...state,
                orders: action.payload
            }
        default:
            return { ...state};
    }
}

export default rootReducer;