import React from "react";
import { Menu } from "../components/Menu";
import PremBurger from "../img/newMenu.jpg";
import GarlicBurger from "../img/garlic_burger.jpg";
import ChickenBurger from "../img/chicken_burger.jpg";
import { Link } from "react-router-dom";

export const Burgers = () => {
  return (
    <div>
      <Menu />

      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded">
              <img
                src={PremBurger}
                className="card-img-top"
                alt="Premium Double Cheeseburger"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6
                  className="text-danger fw-bold text-center"
                  style={{ minHeight: "24px" }}
                >
                  New Menu
                </h6>
                <h5 className="card-title fw-bold text-center">
                  Premium Double Cheeseburger
                </h5>
                <p className="card-text text-center">$8.99</p>
                <div className="d-flex justify-content-center mt-auto">
                  <Link to="/checkout">
                    <button className="btn btn-danger">Add to cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded">
              <img
                src={GarlicBurger}
                className="card-img-top"
                alt="Roasted Garlic Cheeseburger"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6
                  className="text-danger fw-bold text-center"
                  style={{ minHeight: "24px" }}
                >
                  {/* Intentionally empty to keep height consistent */}
                </h6>
                <h5 className="card-title fw-bold text-center">
                  Roasted Garlic Cheeseburger
                </h5>
                <p className="card-text text-center">$5.99</p>
                <div className="d-flex justify-content-center mt-auto">
                  <Link to="/checkout">
                    <button className="btn btn-danger">Add to cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded">
              <img
                src={ChickenBurger}
                className="card-img-top"
                alt="Crispy Chicken Burger"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6
                  className="text-danger fw-bold text-center"
                  style={{ minHeight: "24px" }}
                >
                  {/* Intentionally empty to keep height consistent */}
                </h6>
                <h5 className="card-title fw-bold text-center">
                  Crispy Chicken Burger
                </h5>
                <p className="card-text text-center">$6.99</p>
                <div className="d-flex justify-content-center mt-auto">
                  <Link to="/checkout">
                    <button className="btn btn-danger">Add to cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
