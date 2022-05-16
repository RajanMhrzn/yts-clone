/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../css/Browse.css";

const Browse = () => {
  return (
    <div className="browser-body">
      <Header />
      <div className="browser-search">
        <div className="search-term">
          <input
            type="search"
            className="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button className="search-btn">Search</button>
        </div>
        <div className="search-category">
          <div className="search-name">
            <p>Quality:</p>
            <p>Genre:</p>
            <p>Rating:</p>
            <p>Year:</p>
            <p>Language:</p>
            <p>Order By:</p>
          </div>
          <div className="search-option">
            <button
              className="dropdown"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              All
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  480p
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  720p
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  1080p
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2160p
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  3D
                </a>
              </li>
            </ul>
            <button
              className="dropdown"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              All Genre
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Comedy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Documentary
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Romantic
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  SiFi
                </a>
              </li>
            </ul>
            <button
              className="dropdown"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              All Rating
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  +9
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  +8
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  +7
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  +6
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  +5
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  +4
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  +3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  +2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  +1
                </a>
              </li>
            </ul>

            <button
              className="dropdown"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              All Year
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2022
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2021
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2020
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2019
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2018
                </a>
              </li>
            </ul>
            <button
              className="dropdown"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              All Language
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Nepali
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  French
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  German
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Japanese
                </a>
              </li>
            </ul>
            <button
              className="dropdown"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              All Order By
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Latest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Oldest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Featured
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Download
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Imdb Rating
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="movie-list"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Browse;
