import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from './ItemCount';

function Item(props) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>$ {props.price}</Card.Text>
      </Card.Body>
      <ItemCount stock="8" initial="1"/>
    </Card>
  );
}

export default Item;
