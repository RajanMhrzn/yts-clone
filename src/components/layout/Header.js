/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/website/logo.png";
import "../css/Header.css";
import {NavLink} from "react-router-dom";
// import { Popover, Typography  } from '@mui/material';

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
                <NavLink className="nav-link" to={'/'}>Home</NavLink>
                <NavLink className="nav-link" to={'/'}>Trending</NavLink>
                <NavLink className="nav-link" to={'/browse'}>Browse</NavLink>
                <NavLink className="nav-link" to={'#'}>4k</NavLink>
                <NavLink className="nav-link" to={'#'}>Login</NavLink>
                {/* <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  >
                  <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </Popover> */}
                <NavLink className="nav-link" to={'#'}>Register</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
