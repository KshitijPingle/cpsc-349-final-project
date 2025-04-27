import React from "react";

// TODO Footer
export const Footer = () => {
  return (
  <footer class="row row-cols-1 row-cols-md-5 py-5 my-5 border-top">
    <div class="col md-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        {/* Insert Joe's Burger Logo Here */}
        <p>Logo</p>
      </a>
    </div>
    <div class="col mb-3">
      <h5>Location</h5>
      <div class="nav flex-column">
        <div class="nav-tem mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">Address: ABCD</a>
        </div>
        <div class="nav-tem mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">Phone: XXX-XXX-XXXX</a>
        </div>
        <div class="nav-tem mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">Open hours: 7am - 11pm</a>
        </div>
        <div class="nav-tem mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">FAQ</a>
        </div>
      </div>
    </div>
    <div class="col mb-3">
      <h5>Legal</h5>
      <div class="nav flex-column">
        <div class="nav-tem mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">Terms and Conditions</a>
        </div>
        <div class="nav-tem mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">Do Not Sell My Personal Information</a>
        </div>
        <div class="nav-tem mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">Cookie Preferences</a>
        </div>
        <div class="nav-tem mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">Privacy Policies</a>
        </div>
      </div>
    </div>
    <div class="col mb-3">
      <h5>Join our Community</h5>
      <a href="#" class="nav-link p-0 text-body-secondary">Rewards</a>
      <a href="#" class="nav-link p-0 text-body-secondary">Jobs</a>
      <a href="#" class="nav-link p-0 text-body-secondary">Franchising</a>
      <a href="#" class="nav-link p-0 text-body-secondary">Investors</a>
    </div>
    <div class="col mb-3"></div>
  </footer>
  );
};
