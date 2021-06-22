import React from "react";
import '../css/ItemDetail.css';

function ItemDetail(props) {
  return (
      <div className="ItemDetail">
          <img src={props.image} alt="imageDetail"></img>
          <h5>{props.title}</h5>
          <p>{props.description}</p>
          <p>$ {props.price}</p>
      </div>
  );
}

export default ItemDetail;
