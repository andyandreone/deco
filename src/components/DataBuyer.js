import React, {useState} from "react";
import { Form, Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/DataBuyer.scss';
import { useDataContext } from "./CartContext";
import {getFireStore} from './firebase.js'
import * as firebase from 'firebase';
import Orden from "./Orden";



function DataBuyer() {
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [orderId, setOrderId] = useState("");
const [loading, setLoading] = useState("true")
const [mostrar, setMostrar] = useState('false')

const data = useDataContext();
    

function handleChangeEmail(e) {
  setEmail(e.target.value);
}

function handleChangeName(e) {
  setName(e.target.value);
}

function handleChangePhone(e) {
  setPhone(e.target.value);
}

function addDataFirebase(){
  const db = getFireStore();
  const orders = db.collection("orders");
  const newOrder = {buyers : {
                        correo : email,
                        nombre : name,
                          telefono : phone,
                              },
                    items: data,  
                    }
 orders.add(newOrder).then(({id})=>{
   
   setOrderId(id);
 }).catch(err =>{
   console.log(err)
 }).finally(()=>{
  setMostrar('true');
 })
 
 
}

 if(mostrar == 'false'){
  return (
    <Form className="formDataBuyer">
    <Col>
    <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" onChange={handleChangeEmail}/>
    </Col>
 
    <Col>
    <Form.Label>Nombre</Form.Label>
      <Form.Control type="name" placeholder="Nombre" onChange={handleChangeName}/>
    </Col>
 
    <Col>
    <Form.Label>Telefono</Form.Label>
      <Form.Control type="phone" placeholder="Telefono" onChange={handleChangePhone}/>
    </Col>
    <Col>
      <Link>
      <Button disabled={!(email !== '' && name !== '' && phone !== '')}
      variant="outline-primary" className="buttonfinalizarCompra" onClick={addDataFirebase}>Finalizar Compra</Button>
    </Link> 
  </Col>

  </Form>
  )}else{return (mostrar ? <Orden id={orderId}/> : "")}
    
  
      
}

export default DataBuyer;
