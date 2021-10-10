import { ADD_PRODUCT } from "./actionsType";

//pega o dado q veio do thunks e manda pro reducer
export const addProduct = (product) => ({ type: ADD_PRODUCT, product });
