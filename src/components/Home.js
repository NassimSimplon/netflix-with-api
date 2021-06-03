import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Desc from "./desc.js";
import Apropo from "./apropo.js";
import Trending from "./trending.js";

import Nava from "./Navbar.js";
import { BrowserRouter, Route } from "react-router-dom";
import Filter from "./filter";

function Home({ movie, getFav, getpfav, chage, sug }) {
  return (
    <div>
      <div className="ap">
        <br />
        <br />
        <Desc />
      </div>

      <div className="a">
        <Apropo />
      </div>
      <div className="tran-tit ">
        <strong className=" ding">
          Trending Movies
          <br />
        </strong>
      </div>
      <div className="kala ">
        <br />
        <br />
        <Filter
          movie={movie}
          sug={sug}
          chage={chage}
          getFav={getFav}
          getpfav={getpfav}
        />{" "}
      </div>
      <div className="tren-sec "></div>

      <h1 className="final ">final</h1>

      <div className="bg-dark"></div>
    </div>
  );
}

export default Home;
