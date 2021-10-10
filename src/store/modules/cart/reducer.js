import { ADD_CART, RMV_CART } from "./actionsType";
const defaultState = JSON.parse(localStorage.getItem("@kenzieShop/cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case RMV_CART:
      const { valor } = action;
      return valor;
    default:
      return state;
  }
};
export default cartReducer;
