import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import ProductCard from "../../components/productCard";
import ProductCart from "../../components/productCart";
import SubTotal from "../../components/SubTotal";
import "./styles.css";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const history = useHistory();
  return (
    <div>
      <h2>Carrinho de compras</h2>

      <div className="cart">
        {cart.length > 0 ? (
          <ul className="cart_list">
            <li className="cart_itemss">
              <div>produto</div>
              <div>Descrição</div>
              <div>Preço</div>
            </li>
            {cart.map((e, i) => (
              <li className="cart_items" key={i}>
                {" "}
                {/* <ProductCard product={e} /> */}
                <ProductCart product={e} />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="cart_list cart_list--empty">
            <h4>Nenhum item no carrinho</h4>
            <p>Confira nossos produtos aqui</p>
            <div className="btn_rmv_cart">
              <Button
                onClick={() => history.push("/produtos")}
                variant="outlined"
                color="default"
              >
                Ver Loja
              </Button>
            </div>
          </ul>
        )}

        <SubTotal />
      </div>
    </div>
  );
};
export default Cart;
