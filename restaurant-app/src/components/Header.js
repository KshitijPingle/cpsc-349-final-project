import React from "react";

// TODO: Header.js
export const Header = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/" style={{marginLeft: '15px'}}>
        {/* {Insert logo here later} */}
        <p>Joe's Burger Logo</p>
      </a>
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="/menu/deals">Menu</a>
        <a class="nav-item nav-link" href="checkout">Checkout</a>
      </div>
    </nav>
);
};
