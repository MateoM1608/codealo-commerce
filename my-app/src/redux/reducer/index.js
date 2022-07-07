import Swal from 'sweetalert2'

const initialState = {
    allProducts: [],
    products:[],
    detailProducts: [],
    categories: [],

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
            console.log('resultad',action.payload)
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Iniciaste sesión correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            break;
        default:
            return { ...state};
    }
}

export default rootReducer;