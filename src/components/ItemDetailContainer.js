import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [count, setCount] = useState(1);
  const [add, setAdd] = useState(0);
  const stock = 30;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProducto(res));
  }, []);

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function sumar() {
    if (count < stock) {
      setCount(parseInt(count) + 1);
    }
  }

  function onAdd() {
    setAdd(count);
    return { add };
  }

  return producto != null ? (
    <Container className="ItemDetailContainer">
      <Row>
        <Col xs={8}>
          <ItemDetail
            title={producto.title}
            price={producto.price}
            image={producto.image}
            description={producto.description}
          ></ItemDetail>
        </Col>
        <Col xs={4}>
          <ItemCount count={count} sumarItem={sumar} restarItem={restar} />
          <div>
            <Button variant="info" onClick={onAdd}>
              Agregar al carrito
            </Button>
            <p>Cantidad Agregada {add}</p>
          </div>

          {add > 0 ? (
            <Button variant="primary" className="buttonFinalizarCompra">
              <Link to="/cart">Finalizar Compra</Link>
            </Button>
          ) : (
            <Button
              variant="primary disabled"
              className="buttonFinalizarCompra"
            >
              Finalizar Compra
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  ) : (
    <p>cargando</p>
  );
}

export default ItemDetailContainer;
