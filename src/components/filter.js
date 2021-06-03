import React from "react";
import { useState } from "react";

export default function Filter({ movie, getFav, getpfav, chage, sug }) {
  const [fil, setFil] = useState([]);
  const [fila, setFila] = useState([]);

  const thisHundelChange = () => {
    setFil(document.getElementById("browsers").value);
  };

  return (
    <div className="allfilter">
      <div className="abdrahmen">
        <div id="brow">
          <select name="browsers" id="browsers">
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Animation">Animation</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Family">Family</option>
          </select>
          <input
            type="text"
            onChange={chage}
            className="serch"
            id="filter-serch"
            placeholder="Search"
          />
          <button type="button" onClick={thisHundelChange} id="select-btn">
            Genres
          </button>
        </div>
        <div className="fili">
          {Object.keys(movie)
            .filter((x) => x.genres == sug)
            .map((el) => (
              <div className="background_6">
                <div className="imdb_card">
                  <div className="movie_poster">
                    <img src={movie[el].poster} alt="tv" />
                    <div className="movie_label ">
                      <h2 className="">{movie[el].title}</h2>
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
                      <a href="">WATCH NOW</a>

                      <button
                        onClick={() => {
                          getFav();
                          getpfav(el);
                        }}
                        id="love"
                      >
                        <svg
                          id="kalb"
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
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>{" "}
        <div className="fils">
          {Object.keys(movie)
          .map((el) => (
            <div className="background_6">
              <div className="imdb_card">
                <div className="movie_poster">
                  <img src={movie[el].poster} alt="tv" />
                  <div className="movie_label ">
                    <h2 className="">{movie[el].title}</h2>
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
                    <a href="">WATCH NOW</a>

                    <button
                      onClick={() => {
                        getFav();
                        getpfav(movie[el]);
                      }}
                      id="love"
                    >
                      <svg
                        id="kalb"
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
