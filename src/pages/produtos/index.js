import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
import "./styles.css";
const Produtos = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <ul className="products_list">
        {products.map((product, index) => (
          <li className="products_items" key={index}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Produtos;
