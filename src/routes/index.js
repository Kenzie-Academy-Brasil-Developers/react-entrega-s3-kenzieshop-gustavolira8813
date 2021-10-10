import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Produtos from "../pages/produtos";
import Cart from "../pages/cart";
function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/produtos">
        <Produtos />
      </Route>
    </Switch>
  );
}

export default Routes;
