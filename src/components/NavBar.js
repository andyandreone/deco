import React from "react";
import { Nav, Navbar } from "react-bootstrap";
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
          <Nav.Link>
            <Link to="/contacto">Contacto</Link>
          </Nav.Link>
          <CartWidget />
          {/*
       <NavDropdown title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Camperas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
      </NavDropdown>
      */}
        </Nav>
        {/*
     <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button variant="light">Buscar</Button>
    </Form>
    */}
      </Navbar.Collapse>

      {/*
       <Nav>
        <Nav.Item>
          <NavLink activeClassName="actived" className="link" to="/">
            <img className="logo" src={Logo} alt="logo"></img>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeClassName="actived" className="link" to="/productos">
            Productos
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeClassName="actived" className="link" to="/contacto">
            Contacto
          </NavLink>
        </Nav.Item>
        <Link className="link" to="/cart">
          {" "}
          <CartWidget />{" "}
        </Link>
      </Nav>
      */}
    </Navbar>
  );
};

export default NavBar;
