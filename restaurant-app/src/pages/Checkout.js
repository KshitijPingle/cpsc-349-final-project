import { useCart } from "../context/CartContext";

export const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

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
          <div className="d-flex justify-content-between align-items-center">
            <h4>Total:</h4>
            <h4>${total.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};
