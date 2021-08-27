import { State } from "react-native-gesture-handler";
import { ADD_TO_CART , DELETE_PRODUCT } from "../actions/action-type";

const initialState = {
    cart: [] as any 
}

export const productReducer= (state= initialState , action: any )=>{
    switch(action.type){
        case ADD_TO_CART: 
            if(action.data.toString() == state.cart.id){
                console.log("test "+ state.cart.id)
                return{
                    ...state,
                    cart : state.cart.replace({
                        id: action.data,
                        itemCount: state.cart.itemCount + 1

                    })
                }
            }else{
                return{
                    ...state,
                    cart : state.cart.concat({
                        id: action.data,
                        itemCount: 1

                    })
                }
            }
            
            
        case DELETE_PRODUCT: 
            return{
                ...state,
                cart : state.cart.filter((item: any )=>
                item.id != action.id )
            }
        default:
            return state
    
    }
}