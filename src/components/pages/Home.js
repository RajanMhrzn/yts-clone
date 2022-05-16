/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/Home.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { AiFillStar } from "react-icons/ai";
import {MoviesList} from "./MoviesList";


const home = () => {
  return (
    <>
    <Header/>
    <div className="body">
      <div className="container">
        <div className="slogan">
          <p className="slogan-name">
            Download YTS YIFY movies: HD smallest size
          </p>
          <div className="slogan-detail">
            <p>
              Welcome to the official YTS.MX (.LT) website. Here you can browse
              and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
              quality, all at the smallest file size. YTS Movies Torrents.
            </p>
          </div>
          <div className="slogan-link">
            <a href="#">
              IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
            </a>
          </div>
        </div>
      </div>

      <div className="popular-movie">
        {" "}
        <AiFillStar className="star" /> Popular Downloads
      </div>
      <div className="card-component">
        {/* <div className="containers">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
            alt="Avatar"
            className="image"
          />
          <div className="middle">
            <div className="text">John Doe</div>
          </div>
        </div>
         */}

      <MoviesList/>
      </div>

      <div className="latest-movie">Latest YIFY Movies Torrents</div>
      <div className="upcoming-movie">Upcoming YIFY Movies</div>
      <MoviesList/>
    </div>
    
    <Footer/>
    </>
  );
};

export default home;
