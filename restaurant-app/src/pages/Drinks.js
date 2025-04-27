import React from "react";
import { Menu } from "../components/Menu";
import Cola from "../img/cola.jpg";
import Water from "../img/water.jpg";
import { Link } from "react-router-dom";

export const Drinks = () => {
  return (
    <div>
      <Menu />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded overflow-hidden">
              <img
                src={Water}
                className="card-img-top"
                alt="Water Bottle"
                style={{
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "center",
                  transform: "scale(1.1)", // slightly zoomed in
                  transition: "transform 0.3s ease",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h6
                  className="text-danger fw-bold text-center"
                  style={{ minHeight: "24px" }}
                >
                  {/* blank on purpose */}
                </h6>
                <h5 className="card-title fw-bold text-center">
                  Spring Water Bottle
                </h5>
                <p className="card-text text-center">$1.99</p>
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
                src={Cola}
                className="card-img-top"
                alt="Coca-Cola Bottle"
                style={{ height: "500px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h6
                  className="text-danger fw-bold text-center"
                  style={{ minHeight: "24px" }}
                >
                  {/* blank on purpose */}
                </h6>
                <h5 className="card-title fw-bold text-center">
                  Coca-Cola Bottle
                </h5>
                <p className="card-text text-center">$2.99</p>
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
