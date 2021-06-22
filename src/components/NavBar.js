import React from "react";
import Nav from "react-bootstrap/Nav";
import CartWidget from "./CartWidget";
import {Link,NavLink} from "react-router-dom";
import "../css/NavBar.css";
import Logo from '../img/logo.png'

const NavBar = () => {
  return (
    <div className="navbar justify-content-md-center">
      <Nav>
        <Nav.Item>
          <NavLink activeClassName="actived" className="link" to="/"><img className="logo" src={Logo} alt="logo"></img></NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeClassName="actived" className="link" to="/productos">Productos</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeClassName="actived" className="link" to="/contacto">Contacto</NavLink>
        </Nav.Item>
        <Link className="link" to="/cart"> <CartWidget/> </Link>
      </Nav>
    </div>
  );
};

export default NavBar;
