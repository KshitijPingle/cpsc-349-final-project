import React from "react";
import icon from "../img/burger_icon.png";

export const Footer = () => {
  return (
    <footer className="row row-cols-1 row-cols-md-5 py-5 my-5 border-top">
      <div className="col-md-3 d-flex justify-content-center">
        <a
          href="/"
          className="d-flex align-items-center justify-content-center mb-3 link-body-emphasis text-decoration-none"
        >
          <img
            src={icon}
            alt="Joe's Burger Logo"
            width="120"
            height="120"
            className="me-2"
          />
        </a>
      </div>

      <div className="col mb-3">
        <h5>Location</h5>
        <div className="nav flex-column">
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Address: ABCD
          </button>
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Phone: XXX-XXX-XXXX
          </button>
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Open hours: 7am - 11pm
          </button>
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            FAQ
          </button>
        </div>
      </div>

      <div className="col mb-3">
        <h5>Legal</h5>
        <div className="nav flex-column">
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Terms and Conditions
          </button>
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Do Not Sell My Personal Information
          </button>
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Cookie Preferences
          </button>
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Privacy Policies
          </button>
        </div>
      </div>

      <div className="col mb-3">
        <h5>Join our Community</h5>
        <div className="nav flex-column">
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Rewards
          </button>
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Jobs
          </button>
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start mb-2">
            Franchising
          </button>
          <button className="nav-link p-0 text-body-secondary bg-transparent border-0 text-start">
            Investors
          </button>
        </div>
      </div>
    </footer>
  );
};
