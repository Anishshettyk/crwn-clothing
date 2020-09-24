import CartActionTypes from "./cart.types";

import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hiddden: true, //for showing and hiding cart
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddden: !state.hiddden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        //adding the initial cart items and newly added cart items
      };
    default:
      return state;
  }
};

export default CartReducer;
