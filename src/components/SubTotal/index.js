import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./styles.css";
const SubTotal = () => {
  const cart = useSelector((state) => state.cart);

  const totalItems = cart.length;
  const subTotal = cart
    .reduce((acc, item) => Number(item.price) + acc, 0)
    .toFixed(2);
  return (
    <div className="subtotal">
      <div className="subtotal_title">
        <h2>Detalhes do pedido</h2>
      </div>
      <div className="subtotal_price">
        <h4>{totalItems} produtos</h4>
        <h4>R$ {subTotal}</h4>
      </div>
      <Button variant="contained" color="primary" size="medium">
        Finalizar Pedido
      </Button>
    </div>
  );
};
export default SubTotal;
