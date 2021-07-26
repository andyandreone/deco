import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../css/Item.scss";

function Item(props) {
  return (
    <Col>
      <Link to={`/detalleProducto/${props.id}`} style={{ textDecoration: 'none' }}>
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
          <ion-icon className="add-outline" name="add-outline"></ion-icon>
        </Card.Body>
        
        

      
      </Card>
      </Link>
    </Col>
  );
}

export default Item;
