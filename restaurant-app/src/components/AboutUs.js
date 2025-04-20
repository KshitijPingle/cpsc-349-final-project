import React from "react";

export const AboutUs = () => {
  return (
    <div className="container py-1">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="lead text-center mb-5">
        Joe's Burger is dedicated to bringing you the best burger experience
        with premium quality ingredients, mouthwatering flavors, and exceptional
        service. Since opening our doors, we've made it our mission to serve
        freshly made burgers with a personal touch, offering something for every
        taste.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h3 className="text-danger mb-4">Our Story</h3>
          <p>
            Founded by Joe, a passionate food lover and burger enthusiast, Joe's
            Burger started as a small family-run joint with a simple goal - to
            serve the community the best burgers made from locally sourced,
            fresh ingredients. From the very first bite, our customers knew they
            had found something special.
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="text-danger mb-4">What Makes Us Special</h3>
          <p>
            At Joe's Burger, we take pride in the quality of our food. We use
            only the finest beef, chicken, and fresh vegetables, ensuring every
            bite is packed with flavor. Our secret sauce and hand-cut fries
            elevate your meal to the next level. We believe in offering a
            relaxed, welcoming atmosphere where everyone can enjoy a great meal
            with friends and family.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3 className="text-danger mb-4">Join Us Today!</h3>
        <p>
          Whether you're craving a classic cheeseburger or one of our new menu
          items, we have something for everyone. Come visit us at Joe's Burger
          for an unforgettable burger experience!
        </p>
      </div>
    </div>
  );
};
