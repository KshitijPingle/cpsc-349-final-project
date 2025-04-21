import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-3 text-center">Menu</h1>
      <div className="d-flex gap-3 justify-content-center">
        <Link to={"/menu/deals"}>
          <button className="btn btn-danger">Deals and Offers</button>
        </Link>
        <Link to={"/menu/burgers"}>
          <button className="btn btn-danger">Burgers</button>
        </Link>
        <Link to={"/menu/sides"}>
          <button className="btn btn-danger">Sides</button>
        </Link>
        <Link to={"/menu/drinks"}>
          <button className="btn btn-danger">Drinks</button>
        </Link>
      </div>
    </div>
  );
};
