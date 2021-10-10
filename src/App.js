import "./App.css";
import Routes from "./routes";
import Menu from "./components/menu";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const show = (e) => {
    e.preventDefault();
    console.log(cart);
  };
  return (
    <>
      <img src="../public/img/smartphone.jpeg" />
      <div className="App">
        <Menu />
        <Routes />
      </div>
    </>
  );
}

export default App;
