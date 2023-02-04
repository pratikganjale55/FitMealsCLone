import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/*  */}
      <div className="fullnavbar ">
        <div className="navbar_head">
          <div className="navbarleftDiv">
            <div>
              <i className="fa fa-map-marker fa-x"></i>Food Delivery Only In
              Hyderabad
            </div>
            <div>
              <i className="fas fa-phone-volume fa-x"></i>
              <strong>9100347480</strong>
            </div>
            <div>
              <i className="fa fa-envelope fa-x"></i>fitmealsindia@gmail.com
            </div>
          </div>
        </div>
      </div>

      <nav
        class="navbar navbar-expand-lg  mt-5"
        aria-label="Fifth navbar example"
      >
        <div class="container-fluid ">
          <Link class="navbar-brand" to="/">
            <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-black.png" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse nav_sec" id="navbarsExample05">
            <ul class="navbar-nav me-auto mb-lg-0 navbarContent">
              <div className="div_hover">
                <Link class="nav-item" to="/">
                  Home
                </Link>
              </div>
              <div className="div_hover">
                <Link class="nav-item" to="/products">
                  Products
                </Link>
              </div>
              <div className="div_hover">
                <Link class="nav-item" to="/maintenance">
                  Meal Plane
                </Link>
              </div>

              <div className="div_hover">
                <Link class="nav-item" to="/health">
                  Health Coaching
                </Link>
              </div>

              <div className="div_hover">Blog</div>
              <div className="div_hover">About</div>
            </ul>

            <div className="navbarrightDiv">
              <div>
                <Link to="/login">
                  <i className="glyphicon glyphicon-user fa-2x"></i>
                </Link>
              </div>
              <div>
                <i className="fa fa-search fa-2x"></i>
              </div>

              <div>
                <Link to="/cart">
                  <i className="fa fa-shopping-cart fa-2x"></i>
                </Link>
              </div>
              <div className="nav_third">Call : 9100347480</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
