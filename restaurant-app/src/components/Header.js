import React from "react";
import icon from "../img/burger_icon.png";

export const Header = () => {
  return (
    <nav
      class="navbar sticky-top navbar-expand-lg"
      style={{ backgroundColor: "#dc3545" }}
    >
      <a class="navbar-brand" href="/" style={{ marginLeft: "15px" }}>
        <img
          src={icon}
          alt="Joe's Burger Logo"
          width="40"
          height="40"
          className="me-2"
        />
      </a>
      <div class="navbar-nav">
        <a
          class="nav-item nav-link"
          href="/menu/deals"
          style={{ color: "white", marginLeft: "10px" }}
        >
          Menu
        </a>
        <a
          class="nav-item nav-link"
          href="/checkout"
          style={{ color: "white", marginLeft: "10px" }}
        >
          Checkout
        </a>
      </div>
    </nav>
  );
};
