import {createStore, combineReducers} from 'redux'
import { productReducer } from '../reducers/product-reducer';


const allReducer=combineReducers({
    productReducer: productReducer
});

const configureStore = ()=> createStore(allReducer);
export default configureStore