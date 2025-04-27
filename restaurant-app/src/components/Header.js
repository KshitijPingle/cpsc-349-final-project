import React from "react";

// TODO: Header.js
export const Header = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg" style={{backgroundColor:"#dc3545"}}>
      <a class="navbar-brand" href="/" style={{marginLeft: '15px'}}>
        {/* {Insert logo here later} */}
        <p style={{color:"white"}}>Joe's Burger Logo</p>
      </a>
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="/menu/deals" style={{color:"white", marginLeft:"10px"}}>Menu</a>
        <a class="nav-item nav-link" href="checkout" style={{color:"white", marginLeft:"10px"}}>Checkout</a>
      </div>
    </nav>
);
};
