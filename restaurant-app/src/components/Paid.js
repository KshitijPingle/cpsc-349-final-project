import React from "react";
import { Link } from "react-router-dom";

export const Paid = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center text-center">
      <div>
        <h2 className="mb-4">
          Successfully paid! Thank you for your purchase.
        </h2>
        <Link to="/" className="btn btn-danger">
          Return to Menu
        </Link>
      </div>
    </div>
  );
};
