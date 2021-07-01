import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useDataUpdateContext, useDataContext} from './CartContext'


function ItemDetailContainer(props) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [count, setCount] = useState(1);
  const [add, setAdd] = useState(0);
  const stock = 30;
  const setData = useDataUpdateContext();
  const data = useDataContext();
  let indexArray =[]
  let cantItemsAgregadosCart = 0;

  if(data.length>0){
    data.map((data)=>{
      indexArray.push(data.id)
  })
  cantItemsAgregadosCart = data[indexArray.indexOf(parseInt(id))].cantidad;

  }
  

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
          <ItemCount count={count} sumarItem={sumar} restarItem={restar}/>
          <div>
            <Button variant="info" onClick={()=>{
              onAdd();
              setData(
                producto.id,
                producto.title,
                producto.price,
                producto.image,
                producto.description,
                count
              );
            }}>
              Agregar al carrito
            </Button>
            <p className="itemsAgregados">{cantItemsAgregadosCart} Agregados</p>
            
          </div>

          {add > 0 ? (
            <Link to="/cart"><Button variant="primary" className="buttonIrAlCarrito">
              Ir al Carrito
            </Button></Link>
          ) : (
            <Button
              variant="primary disabled"
              className="buttonIrAlCarrito"
            >
              Ir al Carrito
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
