import React from "react";
import "../App.css";

import { useState, useEffect } from "react";

const Trending = () => {
  const [movie, setMovie] = useState([]),
    resul = () => {
      fetch("movie.json")
        .then((res) => res.json())
        .then((data) => setMovie(data));
    };
  useEffect(() => {
    resul();
  }, []); 

  return movie.map((el) => (
    
    <div>
      <br />
      <br />
      <br />

      <div className="background_6">
        <div className="imdb_card">
          <div className="movie_poster">
            <img src={el.poster} alt="tv" />
            <div className="movie_label ">
              <h2 className="">{el.title}</h2>
            </div>
          </div>

          <div className="movie_content">
            <div className="mov_specs ">
              <p>8.5 | 1h 57min | Animation, Action, Adventure</p>
            </div>
            <div className="mov_description d-flex justify-content-center  ">
              <span className="fa fa-star checked "></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checke "></span>
              <span className="fa fa-star checke "></span>
            </div>
            <div className="buy_ticket">
              <a OnClick="">
                <span>WATCH NOW</span>
                
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};
export default Trending;
