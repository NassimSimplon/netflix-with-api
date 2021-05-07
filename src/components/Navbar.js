import React, { Component } from "react";
import axios from "axios";
import { Navbar, Nav,Form } from "react-bootstrap";
import "../App.css";

class Nava extends Component {
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


  chage = (e) => {
    if(e.target.value == ""){
        this.setState({
      stri: null
    });
}else{
  
    this.setState({
      stri: e.target.value 
    });}
  };

  render() {
    return (
      <div>
      
        
         <Navbar className="nava " variant="dark">
        <Navbar.Brand href="#home">
          
          <img src="/imgs/logi.png" className="logi " alt="logi" />
        </Navbar.Brand >
       
         <Form inline className="mx-auto  ">
                  <input type="text" onChange={this.chage}  id="serch" placeholder="Search" />

        </Form>
        <Nav>
                 

          <Nav.Link href="#home" className="text-white mx-2 ">
            Acceuil
          </Nav.Link>
          <Nav.Link href="#features" className="text-white mx-12">
          catégorie
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-white mx-2">
            Contact
          </Nav.Link>
        </Nav>
       

        <a href="#"  className="mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" id="heart" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg> <span id="sapa">0</span>
         </a>
      </Navbar>
    
   
    
    

        {this.state.data.filter((x) => x.title.includes(this.state.stri)).map((el) => (
             
             <div>
             <div id="serch-drop">
                
                    <img src={el.poster} alt="tv" className="serch-img  " />
                  <h2 className="serch-tit">{el.title}</h2>
                    

                
               
                </div>
                
                <br/>
                </div>
            ))}
      </div>
    );
  }
}

export default Nava;
