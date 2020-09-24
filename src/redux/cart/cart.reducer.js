import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hiddden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddden: !state.hiddden,
      };
    default:
      return state;
  }
};

export default CartReducer;
