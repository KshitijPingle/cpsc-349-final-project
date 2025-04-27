import { useCart } from "../context/CartContext";

export const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
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
      )}
    </div>
  );
};
