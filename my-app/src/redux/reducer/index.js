const initialState = {
    allProducts: [],
    product:[],
    detailProducts: [],
    categories: [],

}

function rootReducer(state = initialState, action){
    switch(action.type) {

        default:
            return { ...state};
    }
}

export default rootReducer;