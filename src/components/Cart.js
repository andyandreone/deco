import React from 'react'
import {useDataContext} from './CartContext'
import '../css/Cart.css'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Cart() {
    const data = useDataContext();
    console.log(data[0])
    return (
        <Container>
            <Row>
         {data.map((data, index) => {
              return (
                   <Col xs={12} key={index} className="boxCart">
                       <Row>
                       <Col xs={2}>
                            <img className="imageCart"src={data.imagen}/>
                           </Col>
                           <Col xs={6}>
                           <p className="titleCart">{data.titulo}</p>
                           </Col>
                           <Col xs={4}>
                           <p className="cantCart">Cantidad agregada: {data.cantidad}</p>
                            
                            <p className="priceCart">Precio unitario: $ {data.precio}</p>   
                            <p className="totalCart">Total: $ {(data.precio*data.cantidad)}</p>
                           </Col>
                       </Row>
                            
                           
               
                  </Col>
               
              );
            })}
            </Row>
        </Container>
    )
}

export default Cart