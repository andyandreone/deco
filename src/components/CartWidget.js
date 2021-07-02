import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useDataContext } from "./CartContext";
import "../css/CartWidget.css";

const CartWidget = () => {
  const data = useDataContext();
  let cantProductsCart = 0;
  data.map((data) => {
    cantProductsCart += data.cantidad;
  });

  return data.length > 0 ? (
    <Nav.Link>
      <Link to="/cart">
        <ion-icon className="cartIcon" name="cart"></ion-icon>
        <p className="cantProductsCart">{cantProductsCart}</p>
      </Link>
    </Nav.Link>
  ) : (
    ""
  );
};

export default CartWidget;
