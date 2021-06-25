import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../css/Item.css";

function Item(props) {
  return (
    <Col>
      <Card className="card">
        <img
          className="imageItem"
          alt="Imagen"
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title className="itemTitle">{props.title}</Card.Title>
          <Card.Text className="itemPrecio">$ {props.price}</Card.Text>
        </Card.Body>
        {/*<ItemCount stock="8" initial="1"/>*/}
        <Button variant="outline-secondary">
          <Link
            className="textButtonDetalle"
            to={`/detalleProducto/${props.id}`}
          >
            Ver detalle
          </Link>
        </Button>
      </Card>
    </Col>
  );
}

export default Item;
