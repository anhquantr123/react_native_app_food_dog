import { ADD_TO_CART, DELETE_PRODUCT } from "./action-type";


export const addToCart=(id: string)=>({
    type: ADD_TO_CART,
    data: id
});

export const deleteProduct = (id:string)=>({
    type: DELETE_PRODUCT,
    data: id
})