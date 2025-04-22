import React from "react";
import Burger from "../img/greetingBurger.jpg";
import { AboutUs } from "../components/AboutUs";
import { Link } from "react-router-dom";
import { HomeDeals } from "../components/HomeDeals";

export const Home = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-dark text-center">Welcome to Joe's Burger!</h1>
          <p className="lead text-danger fw-bold text-center">
            The best burgers in town made with fresh ingredients and a whole lot
            of love.
          </p>
          <div className="d-flex justify-content-center">
            <Link to="/menu/deals">
              <button className="btn btn-danger">Order Now</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={Burger}
            alt="Burger"
            className="img-fluid rounded shadow w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Deals Section */}
      <div className="row" style={{ marginTop: "150px" }}>
        <h1 className="text-dark text-center">Deals and Offers</h1>
        <HomeDeals />

        {/* About us */}
        <div
          className="row"
          style={{ marginTop: "150px", marginBottom: "150px" }}
        >
          <AboutUs />
        </div>
      </div>
    </div>
  );
};
