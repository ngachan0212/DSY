import { combineReducers } from 'redux';
import imageReducer from './images';
import productReducer from './products';
const reducer = combineReducers({
    images: imageReducer,
    products: productReducer,
});
const rootReducer = (state, action) => {
    let stateTemp = state;
    if (action.type === "RESET_INITIAL") {
        stateTemp = undefined;
    }
    return reducer(stateTemp, action);
};

export default rootReducer;
