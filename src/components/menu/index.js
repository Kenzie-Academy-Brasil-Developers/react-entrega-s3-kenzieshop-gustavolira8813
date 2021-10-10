import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
const Menu = () => {
  const history = useHistory();

  const navigator = (link) => {
    history.push(`/${link}`);
  };
  return (
    <>
      <Button onClick={() => navigator("")}>Home</Button>
      <Button onClick={() => navigator("login")}>Login</Button>
      <Button onClick={() => navigator("produtos")}>Produtos</Button>
      <Button onClick={() => navigator("cart")}>Carrinho</Button>
    </>
  );
};
export default Menu;
