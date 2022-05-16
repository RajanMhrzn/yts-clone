/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/Footer.css";

const footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-date"><p>YTS&copy; 2011-2022 </p></div>
          <div className="footer-title">
            <a className="nav-link" href="#">
              -Blog
            </a>
            <a className="nav-link" href="#">
              -DMCA
            </a>
            <a className="nav-link" href="#">
              -API
            </a>
            <a className="nav-link" href="#">
              -RSS
            </a>
            <a className="nav-link" href="#">
              -Contact
            </a>
            <a className="nav-link" href="#">
              -Browse Movies
            </a>
            <a className="nav-link" href="#">
              -Requests
            </a>
            <a className="nav-link" href="#">
              -Login
            </a>
          </div>
        </div>
        <div className="footer-info">
          By using this site you agree to and accept our User Agreement, which
          can be read here.
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default footer;
