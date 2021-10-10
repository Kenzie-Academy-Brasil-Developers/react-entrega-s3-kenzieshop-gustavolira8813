import { useDispatch, useSelector } from "react-redux";
import { addToCart, rmvToCart } from "./actions";

export const addToCartThunk = (product) => (dispatch, getStore) => {
  const { cart } = getStore();
  const { products } = getStore();

  product.isADD = true;
  const list = JSON.parse(localStorage.getItem("@kenzieShop/cart")) || [];
  list.push(product);
  localStorage.setItem("@kenzieShop/cart", JSON.stringify(list));
  dispatch(addToCart(product));
};

export const rmvToCartThunk = (product) => (dispatch, getStore) => {
  const { cart } = getStore();
  product.isADD = false;
  const updateCart = cart.filter((e) => e !== product);
  const { products } = getStore();
  localStorage.setItem("@kenzieShop/cart", JSON.stringify(updateCart));
  dispatch(rmvToCart(updateCart));
  console.log(products);
};
