import { createSelector } from "reselect";

//selects cart state from state
const selectCart = (state) => state.cart;

//selects cart items from selectCart
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//reduces the cart items to get the total qantity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);
