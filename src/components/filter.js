import React, { Component } from 'react'
import axios from "axios";

/**
 * @author
 * @function Filter
 **/
export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          stri: 0,
        };
      }
    
      getData() {
        axios.get("film.json").then((response) => {
          var a = response.data;
          this.setState({ data: a });
        });
      }
      componentDidMount() {
        this.getData();
      }
    
      thisHundelChange = () => {
        if(document.getElementById("browsers").value == ""){
            this.setState({
          stri: null
        });
    }else{
    
        this.setState({
          stri: document.getElementById("browsers").value
        });}
      };
    
      render() {
        return (
            <div className="abdrahmen">



          <div id='brow'>



            <select name="browsers" id="browsers" >
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
            <button type="button" onClick={this.thisHundelChange} id="select-btn">Genres</button>

            </div>

            <div className="fili">
{this.state.data
          .filter((x) => x.genres.includes(this.state.stri))
          .map((el) => (

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
          ))}
            </div></div>
        )
    }
}
