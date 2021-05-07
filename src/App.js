//import Nava from "./components/navbar.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Desc from "./components/desc.js";
import Apropo from "./components/apropo.js";
import Trending from "./components/trending.js";
import Footer from "./components/footer.js";
import Nava from './components/Navbar.js'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
 <div className="ap">
<Nava />
<br/><br/>
        <Desc />
      </div>     
      <div id="nass">
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
      <div className="tren-sec ">
              <Trending />

     
        
      </div>

      <h1 className="final ">final</h1>
        
      <div className="bg-dark">
        <Footer />
  </div>
 
  
  
   
    </div>
  );
}

export default App;
