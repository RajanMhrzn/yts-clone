/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/website/logo.png";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="body">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="container-bar">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" className="logo" />
              <p>HD movies at the smallest file size.</p>
            </a>
          </div>
          <div className="container-item">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <input
                  type="search"
                  className="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  4K
                </a>
                <a className="nav-link" href="#">
                  Trending
                </a>
                <a className="nav-link" href="#">
                  Browse Movies
                </a>
                <a className="nav-link" href="#">
                  Login
                </a>
                <a className="nav-link" href="#">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
