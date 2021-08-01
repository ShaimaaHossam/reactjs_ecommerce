import {combineReducers} from 'redux';
import cartReducer from './Shopping/cart-reducer';
const rootReducer = combineReducers({
    cartData: cartReducer,
});

export default rootReducer;