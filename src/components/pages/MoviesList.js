import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/MoviesList.css";
import {useNavigate} from "react-router";

export const MoviesList = ({movie}) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://yts.mx/api/v2/list_movies.json").then((res) => {
      // console.log(res.data.data["movies"]);
      setState([...res.data.data.movies]);
    });
  }, [[]]);
  const navigate = useNavigate();
    const routeHandler = ()=>{
        navigate('/movie/'+ movie.id)
    }
  return (
    <div>
      {/* {state.slice(0, 10).map((v, key) => { */}
      {state.map((v, key) => {
        return (
          <div className="movie" onClick={routeHandler} >
          <div className="movie-info">
            <div className="movie-detail" key={key}>
              <div className="movie-title">{v.title}</div>
                <img className="movie-image" src={v.small_cover_image}></img>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};
