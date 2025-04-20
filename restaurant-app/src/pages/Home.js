import React from "react";
import Burger from "../img/greetingBurger.jpg";

export const Home = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text column */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-dark">Welcome to Joe's Burger</h1>
          <p className="lead text-danger fw-bold">
            The best burgers in town made with fresh ingredients and a whole lot of love.
          </p>
        </div>

        {/* Image column */}
        <div className="col-md-6">
          <img src={Burger} alt="Burger" className="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  );
};