import { ADD_CART, RMV_CART } from "./actionsType";

export const addToCart = (product) => {
  return { type: ADD_CART, product: product };
};

export const rmvToCart = (product) => {
  return { type: RMV_CART, valor: product };
};
