import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Paid } from "./Paid";

export const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isPaid, setIsPaid] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  if (isPaid) {
    return <Paid />;
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <span className="fw-bold">{item.name}</span> - $
                  {item.price.toFixed(2)}
                </div>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeFromCart(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Total:</h4>
            <h4>${total.toFixed(2)}</h4>
          </div>
          <button
            className="btn btn-danger w-100"
            onClick={() => setIsPaid(true)}
          >
            Proceed to Pay
          </button>
        </>
      )}
    </div>
  );
};
