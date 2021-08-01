import cartTypes from './cart-types';

export const addToCart = (product) => {
    return{
        type: cartTypes.ADD_TO_CART,
        payload: product
    }
}
