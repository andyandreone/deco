import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../css/ItemList.css";
import {getFireStore} from './firebase.js'
import * as firebase from 'firebase';

export default function ItemListCategories() {
  const [productos, setProductos] = useState(null);
  const {categoryId} = useParams();

useEffect(()=>{ 
  const db = getFireStore()
  const data = db.collection("productos")
  const dataCategory = data.where('categoria','==',categoryId)
  dataCategory.get().then((querySnapshot)=>{
      if(querySnapshot.size === 0){
          console.log("No results!");
      }
      setProductos(querySnapshot.docs.map(doc => doc.data()));
  }).catch((error)=>{
      console.log("Error searching items", error);
  })
},[categoryId]);

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
          : <div class="loader" id="loader">Loading...</div>}
      </Row>
    </Container>
  );
}