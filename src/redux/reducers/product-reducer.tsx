import { ADD_TO_CART, DELETE_PRODUCT } from "../actions/action-type";

const initialState = {
  cart: [] as any,
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat({
          id: action.data.id,
          quantity: action.data.quantity,
          price: action.data.price,
          name: action.data.name,
          image: action.data.image,
        }),
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id != action.data.id),
      };
    default:
      return state;
  }
};
