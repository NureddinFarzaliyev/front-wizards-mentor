import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { CartItem } from "../features/cartSlice.types";
import { removeFromCart } from "../features/cartSlice";

const CartPage = () => {
  const { cartItems, totalPrice, totalItems } = useSelector(
    (state: any) => state.cart,
  );

  const dispatch = useDispatch();

  const removeFromCartHandler = (item: Omit<CartItem, "title">) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <Link to="/">Go to Home</Link>
      <hr />

      <h1>Cart Page</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <div>
        {cartItems.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          cartItems.map((item: CartItem, index: number) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button
                onClick={() => {
                  removeFromCartHandler({
                    id: item.id,
                    price: item.price,
                  });
                }}
              >
                Remove from Cart
              </button>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
