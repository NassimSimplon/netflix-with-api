import React from "react";
import "../App.css";
import Nava from "./Navbar";
import {useState,useEffect} from 'react' ;
import axios from 'axios'

export default function Favourite() {
  const [pageFav, setPageFav] = useState([]);

    
useEffect(() => {
  axios
      .get(`https://movie-app-57731-default-rtdb.firebaseio.com/Favourite.json`)
      .then((res) => {
        var b = res.data;

        setPageFav(b);
      });
}, []);
const relaodPage=()=>{
  window.location.reload()

}
const fasa = (id) => {
  axios
    .delete(
      `https://movie-app-57731-default-rtdb.firebaseio.com/Favourite/${id}.json/`
    )
    .then((res) => {
      console.log(res.data);
    }).then(res=>relaodPage());
};
  return (
    <div>
      <div className="tran-tit ">
        <strong className=" ding mt-4">
          Favourites Movies
          <br />
        </strong>
      </div>
      <div id="favi-cadrs">
        {Object.keys(pageFav).map((el) => (
          <div>
            <br />
            <br />
            <br />

            <div className="background_6">
              <div className="imdb_card" id="crda">
                <div className="movie_poster">
                  <img src={pageFav[el].poster} alt="tv" />
                  <div className="movie_label ">
                    <h2 className="">{pageFav[el].title}</h2>
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

                    <button id="love">
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
                  <button
                    onClick={() => fasa(el)}
                    id="deleta"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
