import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Trending from "./pages/Trending";
// import MovieDetails from "./pages/MovieDetails";

const MyRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/browse" element={<Browse/>} />
          <Route path="/trending" element={<Trending/>} />
          {/* <Route path="/movie/:id" element={<MovieDetails/>}/> */}

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoute;
