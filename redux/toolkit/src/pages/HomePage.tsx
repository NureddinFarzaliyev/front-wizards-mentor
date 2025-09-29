import { Link } from "react-router-dom";
import type { CartItem } from "../features/cartSlice.types";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const HomePage = () => {
  const products: CartItem[] = [
    { id: 1, title: "Product 1", price: 10 },
    { id: 2, title: "Product 2", price: 20 },
    { id: 3, title: "Product 3", price: 30 },
  ];

  const dispatch = useDispatch();

  const onClick = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Link to="/cart">Go to Cart</Link>
      <hr />
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: "10px" }}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => {
                onClick({
                  id: product.id,
                  price: product.price,
                  title: product.title,
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
