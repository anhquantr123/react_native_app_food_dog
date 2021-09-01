import { ADD_TO_CART, DELETE_PRODUCT } from "./action-type";


export const addToCart=(product: any)=>({
    type: ADD_TO_CART,
    data: product
});

export const deleteProduct = (data: any )=>({
    type: DELETE_PRODUCT,
    data: data
})