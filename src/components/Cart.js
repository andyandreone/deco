import React from "react";
import { useDataContext } from "./CartContext";
import "../css/Cart.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDeleteItemDataContext } from "./CartContext";
import {Link} from "react-router-dom"

function Cart() {
  const data = useDataContext();
  const deleteData = useDeleteItemDataContext();
  let total = 0;
  data.map((data)=>{
      total+=data.precio*data.cantidad
      return total
  })
  
  
  return (
    <Container>
       
        <Row className="cartDisplay">
            <Col xs={4} className="total">
             TOTAL: ${total}
            </Col>
            <Col xs={{ span: 4, offset: 4 }} >
             <Link to='/productos'>
             <Button variant="outline-secondary">
                Seguir comprando
            </Button>
             </Link>
            </Col>
        </Row>
       
      <Row>
        {  data.length>0 ?
    
        data.map((data, index) => {
       
          return (
            <Col xs={12} key={index} className="boxCart">
              <Row>
                <Col xs={2}>
                  <img className="imageCart" src={data.imagen} alt="imagen" />
                </Col>
                <Col xs={6}>
                  <p className="titleCart">{data.titulo}</p>
                </Col>
                <Col xs={3}>
                  <p className="cantCart">Cantidad agregada: {data.cantidad}</p>

                  <p className="priceCart">Precio unitario: $ {data.precio}</p>
                  <p className="totalCart">
                    Subtotal Item: $ {data.precio * data.cantidad}
                  </p>
                </Col>
                <Col className="trash" xs={1}>
                  <ion-icon name="trash" onClick={()=>{deleteData(data.id)}}></ion-icon>
                </Col>
              </Row>
            </Col>
          );
        }):<p>No hay productos en el carrito</p>}
      </Row>
    </Container>
  );
}

export default Cart;
