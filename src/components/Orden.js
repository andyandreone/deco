import React, { useState, useEffect } from "react";
import { getFireStore } from "./firebase.js";
import * as firebase from "firebase";
import "../css/Orden.scss";

function Orden(props) {
  const [detalleCompra, setDetalleCompra] = useState(null);
  let total = 0;

  useEffect(() => {
    const db = getFireStore();
    const ordersCollection = db.collection("orders");
    const compra = ordersCollection.doc(props.id);
    compra
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No results!");
          return;
        }
        setDetalleCompra({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
  }, []);

  if (detalleCompra !== null) {
    return (
      <div className="detalleCompra">
        <p className="reciboCompra">DETALLE COMPRA</p>
        <p className="codigoCompra">{props.id}</p>
        <p>{detalleCompra.buyers.nombre}</p>
        <p>{detalleCompra.buyers.correo}</p>
        <p>{detalleCompra.buyers.telefono}</p>
        <p>{detalleCompra.buyers.date}</p>

        {detalleCompra.items.map((producto, i) => {
          total += producto.precio * producto.cantidad;

          return (
            <ul className="listaOrden" key={i}>
              <li>{producto.titulo}</li>
              <li className="cantidadOrden">{producto.cantidad}</li>
              <li className="subtotalOrden">$ {producto.precio * producto.cantidad}</li>
            </ul>
          );
        })}
        <p className="totalOrden">Total: ${total}</p>
      </div>
    );
  } else {
    return <div class="loader" id="loader">
    Loading...
  </div>;
  }
}

export default Orden;
