import React from "react";
import Nav from "react-bootstrap/Nav";
import CartWidget from "./CartWidget";
import "../App.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Productos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Contacto</Nav.Link>
        </Nav.Item>
        <CartWidget />
      </Nav>
    </div>
  );
};

export default NavBar;
