import React, { useState, useEffect } from "react";
import { getFireStore } from "./firebase.js";
import * as firebase from "firebase";
import "../css/Orden.scss";

function OrdenList() {
  const [productos, setProductos] = useState(null);
  let total = 0;

  useEffect(() => {
    const db = getFireStore();
    const data = db.collection("orders");
    data
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setProductos(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
  }, []);

  if (productos != null) {
    return productos.map((order, i) => {
      return (
        <div className="detalleCompra" key={i}>
          <p className="reciboCompra">DETALLE COMPRA</p>
          <p>{order.buyers.nombre}</p>
          <p>{order.buyers.correo}</p>
          <p>{order.buyers.telefono}</p>
          <p>{order.buyers.date}</p>

          {order.items.map((producto, i) => {
            total += producto.precio * producto.cantidad;
            return (
              <ul className="listaOrden" key={i}>
                <li>{producto.titulo}</li>
                <li className="cantidadOrden">{producto.cantidad}</li>
                <li className="subtotalOrden">
                  $ {producto.precio * producto.cantidad}
                </li>
              </ul>
            );
          })}
          <p className="totalOrden">Total: ${total}</p>
        </div>
      );
    });
  } else {
    return <div class="loader" id="loader">
             Loading...
            </div>;
  }
}

export default OrdenList;
