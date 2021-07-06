import React from "react";
import ItemDetail from "./ItemDetail";
import Container from "react-bootstrap/Container";
import "../css/ItemDetailContainer.css";

function ItemDetailContainer() {
  return (
    <Container className="ItemDetailContainer">
      <ItemDetail/>
    </Container>
  );
}

export default ItemDetailContainer;
