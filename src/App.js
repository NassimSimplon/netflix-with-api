import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer.js";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Favourite from "./components/favourite";
import Dashp from "./dashbord/dash";

import Nava from "./components/Navbar";
function App() {
  {
    /************************************GET Movies With Axios / Get****************************************/
  }
  const [movie, setMovie] = useState([]),
    resul = () => {
      axios
        .get(`https://movie-app-57731-default-rtdb.firebaseio.com/movie.json`)
        .then((res) => {
          var a = res.data;

          setMovie(a);
        });
    };
  useEffect(() => {
    resul();
  }, []);
  {
    /************************************GET Favourite Movie****************************************/
  }

  const [pfav, setPfav] = useState([]);
  const [fav, setFav] = useState(0);
  const getFav = () => {
    setFav(fav + 1);
  };

  const getpfav = (el) => {
  setPfav(el)
    axios
    .post(
      `https://movie-app-57731-default-rtdb.firebaseio.com/Favourite.json`,
      JSON.stringify(pfav)
    )
    .then((res) => {
      console.log(res.data);
    });
  };

  {
    /************************************DELETE Movie With AXIOS***************************************/
  }
  const delta = (id) => {
    axios
      .delete(
        `https://movie-app-57731-default-rtdb.firebaseio.com/movie/${id}.json/`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const [data, setData] = useState({
    title: "",
    genres: "",
    poster: "",
  });
  {
    /************************************ADD MOVIE WITH AXIOS / POST****************************************/
  }
  const sub = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://movie-app-57731-default-rtdb.firebaseio.com/movie.json`,
        JSON.stringify(data)
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const [sug, setSug] = useState([]);

  const chage = (e) => {

      setSug(e.target.value);
    
  };
  return (
    <div className="ap">
      <BrowserRouter>
        <Nava
          movie={movie}
          fav={fav}
          setMovie={setMovie}
          sug={sug}
          chage={chage}
        />
        <Route exact path="/">
          <Home
            movie={movie}
            getFav={getFav}
            getpfav={getpfav}
            fav={fav}
            setMovie={setMovie}
            sug={sug}
            chage={chage}
          />
        </Route>

        <Route exact path="/Favourite">
          <Favourite movie={movie} delta={delta} />
        </Route>
        <Route exact path="/Admin">
          <Dashp
            sub={sub}
            setData={setData}
            movie={movie}
            data={data}
            delta={delta}
            setMovie={setMovie}
          />
        </Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
