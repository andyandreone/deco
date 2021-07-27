import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import Logo from "../img/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo"></img>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/productos">Productos</Link>
          </Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/categoria/espejos">Espejos</Link>{" "}
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/categoria/cuadros">Cuadros</Link>{" "}
            </NavDropdown.Item>
          </NavDropdown>
          <CartWidget />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
