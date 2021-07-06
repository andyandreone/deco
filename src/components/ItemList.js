import React, { useEffect, useState } from "react";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../css/ItemList.css";
import {getFireStore} from './firebase.js'
import * as firebase from 'firebase';

export default function ItemList() {
  const [productos, setProductos] = useState(null);

  useEffect(()=>{ 
    const db = getFireStore()
    const data = db.collection("productos")
    data.get().then((querySnapshot)=>{
        if(querySnapshot.size === 0){
            console.log("No results!");
        }
        setProductos(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error)=>{
        console.log("Error searching items", error);
    })
},[]);

  /*
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  */



  return (
    <Container className="itemList">
      <Row>
        {productos !== null
          ? productos.map((producto, index) => {
              return (
                <Item
                  key={index}
                  id={producto.id}
                  image={producto.image}
                  title={producto.title}
                  price={producto.price}
                />
              );
            })
          : <p>Cargando</p>}
      </Row>
    </Container>
  );
}
