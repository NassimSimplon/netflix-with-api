import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import logi from "../logi.png";

import "../App.css";

const Nava = ({ movie, fav, setMovie, chage, sug }) => {
  return (
    <div className="all mt-2">
      <Navbar className="hani" variant="dark">
        <Navbar.Brand>
          <img src={logi} className="logi " alt="logi" />
        </Navbar.Brand>

        <Form className="mx-auto">
          <input
            onChange={chage}
            type="text"
            className="serch"
            id="ava-serch"
            placeholder="Search"
          />
        </Form>
        <Nav>
          <Link to="/" className="text-white mx-2 ">
            Acceuil
          </Link>
     
          <Link to="/Favourite">
            <a className="mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                id="heart"
                fill="currentColor"
                class="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
              <span id="sapa">{fav}</span>
            </a>
          </Link>
        </Nav>
      </Navbar>

      {Object.keys(movie)
        .filter((x) => x.title == sug)
        .map((el) => (
          <div key={movie[el].id}>
            <div id="serch-drop">
              <img src={movie[el].poster} alt="tv" className="serch-img  " />
              <h2 className="serch-tit">{movie[el].title}</h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Nava;
