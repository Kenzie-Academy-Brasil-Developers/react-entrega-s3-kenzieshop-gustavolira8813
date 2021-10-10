import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { rmvToCartThunk } from "../../store/modules/cart/thunks";
const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className="product_cart">
      <img className="product_cart_item" src={product.image} alt="foto" />
      <div className="product_cart_item">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="product_cart_item">
        <p>R$ {product.price}</p>
        <Button
          onClick={() => dispatch(rmvToCartThunk(product))}
          variant="contained"
          color="secondary"
          size="small"
        >
          Remover Produto
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
