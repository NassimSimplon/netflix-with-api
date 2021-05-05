import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function Apropo() {
  return (
    <div className="apropo">
      <Container>
        <Row>
          <Col md={6} className="apro-sec ">
            <div className="aproo">
              <h1 className="tit">Regardez Netflix sur votre TV.</h1> <br />
              <p className="ap-para">
                Regardez Netflix sur votre Smart TV, PlayStation, Xbox,
                Chromecast, Apple TV, lecteurs Blu-ray et bien plus.
              </p>
            </div>
          </Col>
          <Col md={6} className="apro-sec">
            <img src="/imgs/cho.jpg" alt="cho" className="cho " />
          </Col>
          
        </Row>
        
      </Container>
      
    </div>
  );
}

export default Apropo;
