import React from "react";
import Burger from "../img/greetingBurger.jpg";
import Deal1 from "../img/doubleBurger.jpg";
import Deal2 from "../img/chickenNugget.jpg";
import Deal3 from "../img/newMenu.jpg";
import { AboutUs } from "../components/AboutUs";

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
            <button className="btn btn-danger">Order Now</button>
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

        {/* Deal 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm rounded">
            <img
              src={Deal1}
              className="card-img-top"
              alt="Veggie Hamburger"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h6 className="text-danger fw-bold text-center">Limited time</h6>
              <h5 className="card-title fw-bold text-center">
                2 Classic Veggie Hamburger with Fries
              </h5>
              <p className="card-text">
                Enjoy two delicious veggie hamburgers, perfectly seasoned and
                paired with crispy fries. Fresh, satisfying, and a fantastic
                choice for any time of day.
              </p>
              <div className="d-flex justify-content-center mt-auto">
                <button className="btn btn-danger">View Menu</button>
              </div>
            </div>
          </div>
        </div>

        {/* Deal 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm rounded">
            <img
              src={Deal2}
              className="card-img-top"
              alt="Pineapple Dragonfruit"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h6 className="text-danger fw-bold text-center">
                Customer Favorite
              </h6>
              <h5 className="card-title fw-bold text-center">
                Chicken Nuggets with Sauces
              </h5>
              <p className="card-text">
                Golden, crispy chicken nuggets served with a variety of tasty
                dipping sauces. A delightful snack or meal for anyone craving
                something savory and flavorful.
              </p>
              <div className="d-flex justify-content-center mt-auto">
                <button className="btn btn-danger">View Menu</button>
              </div>
            </div>
          </div>
        </div>

        {/* Deal 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm rounded">
            <img
              src={Deal3}
              className="card-img-top"
              alt="Pineapple Dragonfruit"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h6 className="text-danger fw-bold text-center">New Menu</h6>
              <h5 className="card-title fw-bold text-center">
                Premium Double Cheeseburger
              </h5>
              <p className="card-text">
                Indulge in a juicy double cheeseburger, topped with sweet
                caramelized onions and melted cheese. A flavorful combination
                that's sure to satisfy your cravings.
              </p>
              <div className="d-flex justify-content-center mt-auto">
                <button className="btn btn-danger">View Menu</button>
              </div>
            </div>
          </div>
        </div>

        {/* About us */}
        <div className="row" style={{ marginTop: "150px" }}>
          <AboutUs />
        </div>
      </div>
    </div>
  );
};
