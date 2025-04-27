import React from "react";
import Deal1 from "../img/doubleBurger.jpg";
import Deal2 from "../img/chickenNugget.jpg";
import Deal3 from "../img/newMenu.jpg";
import { Link } from "react-router-dom";

export const HomeDeals = () => {
  return (
    <div>
      <div className="row">
        {/* Deal 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm rounded">
            <img
              src={Deal1}
              className="card-img-top"
              alt="2 Veggie Hamburger with Fries"
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
                <Link to="/menu/deals">
                  <button className="btn btn-danger">View Menu</button>
                </Link>
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
              alt="Chicken Nuggets with Sauces"
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
                <Link to="/menu/sides">
                  <button className="btn btn-danger">View Menu</button>
                </Link>
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
              alt="Premium Double Cheeseburger"
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
                <Link to="/menu/burgers">
                  <button className="btn btn-danger">View Menu</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
