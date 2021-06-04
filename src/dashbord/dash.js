import React from "react";
import Update from "./update";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./dash.css";
export default function Dashp({ movie, setData, data, delta, sub, setMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  return (
    <div>
      {/************************************MODAL FOR ADD MOVIE ****************************************/}
      <svg
        id="plus"
        onClick={handleShow}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-plus-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={sub}>
            <label id="add-movies">
              <br />
              <input
                type="text"
                name="name"
                id="title"
                placeholder="Movie Name"
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
              <input
                type="text"
                name="Genres"
                placeholder="Genres"
                onChange={(e) => setData({ ...data, genres: e.target.value })}
              />
              <input
                type="text"
                name="pster"
                placeholder="Link of Image"
                onChange={(e) => setData({ ...data, poster: e.target.value })}
              />

              <br />
            </label>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button id="secondary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
      <br />
      <br />
      <br />
      <br />
      <div className="tren-sec">
        {Object.keys(movie).map((el) => (
          <div id="dash-card" className="d-flex flex-direction-row ">
            <br />
            <br />
            <br />

            <div className="background_6 ">
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
                    <a>WATCH NOW</a>

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
                    <button
                      onClick={() => delta(el)}
                      className="delete mt-3 ms-5"
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
                    <Update el={el} movie={movie} setMovie={setMovie} />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
