import React, { useEffect, useState } from "react";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../css/ItemList.css";

export default function ItemList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Container className="itemList">
      <Row>
        {data !== null
          ? data.map((data, index) => {
              return (
                <Item
                  key={index}
                  id={index + 1}
                  image={data.image}
                  title={data.title}
                  price={data.price}
                />
              );
            })
          : "Cargando"}
      </Row>
    </Container>
  );
}
