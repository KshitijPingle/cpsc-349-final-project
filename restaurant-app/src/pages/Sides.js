import React from "react";
import { Menu } from "../components/Menu";
import Nugget from "../img/chickenNugget.jpg";
import Fries from "../img/fries.jpg";
import { Link } from "react-router-dom";

export const Sides = () => {
  return (
    <div>
      <Menu />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded">
              <img
                src={Nugget}
                className="card-img-top"
                alt="Chicken Nuggets with Sauces"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6
                  className="text-danger fw-bold text-center"
                  style={{ minHeight: "24px" }}
                >
                  Customer Favorite
                </h6>
                <h5 className="card-title fw-bold text-center">
                  Chicken Nugget with Sauces
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

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded">
              <img
                src={Fries}
                className="card-img-top"
                alt="French Fries with Sauces"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6
                  className="text-danger fw-bold text-center"
                  style={{ minHeight: "24px" }}
                >
                  {/* blank on purpose */}
                </h6>
                <h5 className="card-title fw-bold text-center">
                  French Fries with Sauces
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
        </div>
      </div>
    </div>
  );
};
