import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import {
  addToCartThunk,
  rmvToCartThunk,
} from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";



const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addToCartThunk(item));
  };
  const history = useHistory();

  const buyNow = (item) => {
    addToCart(item);
    history.push("/cart");
  };

  const rmvToCart = (item) => {
    dispatch(rmvToCartThunk(item));
  };
  return (
    <>
      <img src={product.image} alt="produto" />

      <h3>{product.name}</h3>
      <p>R$ {product.price} reais</p>
      <div>
        <Button
          onClick={() => buyNow(product)}
          variant="contained"
          color="primary"
        >
          Comprar Agora
        </Button>
        <br />
        {product.isADD ? (
          <Button
            onClick={() => rmvToCart(product)}
            variant="contained"
            color="secondary"
          >
            Retirar do carrinho
          </Button>
        ) : (
          <Button
            // onClick={console.log(produto)}
            onClick={() => addToCart(product)}
            variant="contained"
            color="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </div>
    </>
  );
};

export default ProductCard;
