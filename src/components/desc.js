import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Desc() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <h1 className="text-white mt-5 text-center" id="h1">
             
              <strong>Films, séries TV et bien plus en illimité.</strong>
            </h1>
            <p className="text-white mt-3 text-center" id="p">
              Où que vous soyez. Annulez à tout moment.
            </p>
            <br />
            <p className="text-white  text-center" id="para">
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </p>
            <div className="text-white  div">
              <input type="text" placeholder="Adresse e-mail" id="input" />
              <button className="button">Commencer</button>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
}
