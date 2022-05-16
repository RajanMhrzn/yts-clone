import React from "react";
import "./App.css";
// import Movie from "./components/Movie";
// import Footer from './components/layout/Footer';
// import Home from "./components/pages/Home";
import MyRoute from "./components/MyRoute";

// const Featured_API = " https://yts.mx/api/v2/list_movies.json"; //list movie api

// const Detail_API = " https://yts.mx/api/v2/movie_details.json"; //detail of movie api

// const Suggestion_API = " https://yts.mx/api/v2/movie_suggestions.json"; //suggestion movie api

function App() {
  return (
    <div>
      <MyRoute />
      {/* {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} data={movie} />)} */}
      {/* <Footer/> */}
    </div>
  );
}
export default App;
