import { ADD_TO_CART } from "../actions/cart_action";

const initialState = {
    cartCount: 0,
    selectedProducts: []
}

const cart_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let count = state.cartCount + 1;
            let products = state.selectedProducts;
                products.push(action.payload)

            return {...state, cartCount: count, selectedProducts: products}
        default:
            return state;
    }
}

export default cart_reducer;