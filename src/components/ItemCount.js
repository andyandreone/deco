import React from "react";
import "../css/ItemCount.css";
import Button from "react-bootstrap/Button";

export default function ItemCount(props) {
  return (
    <div className="itemCount">
      <Button variant="secondary" onClick={props.restarItem}>
        -
      </Button>
      <p className="cantidadItemCount">{props.count}</p>
      <Button variant="secondary" onClick={props.sumarItem}>
        +
      </Button>
      <p className="stockDisponible">{props.stock} Disponibles</p>
    </div>
  );
}
