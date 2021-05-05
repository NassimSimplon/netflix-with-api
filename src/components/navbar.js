import React from "react";
import "../App.css";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
export default function Nava() {
  return (
    <div>
      <Navbar className="nava mb-5 " variant="dark">
        <Navbar.Brand href="#home">
          
          <img src="/imgs/logi.png" className="logi " alt="logi" />
        </Navbar.Brand>
        <Form inline className="mx-auto  ">
          <FormControl
            type="text"
            placeholder="Search"
            id="serch"
            className="ml-5   bg-transparent"
          />
        </Form>
        <Nav>
          <Nav.Link href="#home" className="text-white">
            Acceuil
          </Nav.Link>
          <Nav.Link href="#features" className="text-white">
          catégorie
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-white">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
