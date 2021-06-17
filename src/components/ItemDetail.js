import React from "react";
import '../css/ItemDetail.css';

function ItemDetail(props) {
  return (
      <div className="ItemDetail">
          <img src="http://placehold.it/800x300" alt="imageDetail"></img>
          <h5>{props.title}</h5>
          <p>{props.descripcion}</p>
          <p>$ {props.precio}</p>
      </div>
  );
}

export default ItemDetail;
