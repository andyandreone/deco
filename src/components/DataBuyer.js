import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/DataBuyer.scss";
import { useDataContext } from "./CartContext";
import { getFireStore } from "./firebase.js";
import * as firebase from "firebase";
import Orden from "./Orden";
import moment from "moment"

function DataBuyer() {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);
  const data = useDataContext();
  

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    if (emailConfirm == e.target.value) {
      setEmailValidate(true);
    }
    if (emailConfirm != e.target.value) {
      setEmailValidate(false);
    }
  }

  function handleChangeEmailConfirm(e) {
    setEmailConfirm(e.target.value);
    if (email == e.target.value) {
      setEmailValidate(true);
    }
    if (email != e.target.value) {
      setEmailValidate(false);
    }
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function addDataFirebase() {
    const db = getFireStore();
    const orders = db.collection("orders");
    let date = moment().format('MMMM Do YYYY, h:mm:ss a')
    const newOrder = {
      buyers: {
        correo: email,
        nombre: name,
        telefono: phone,
        date: date,
      },
      items: data,
    };
    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (orderId == null) {
    return (
      <Form className="formDataBuyer">
        <Col>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={handleChangeEmail}
          />
        </Col>

        <Col>
          <Form.Label>Confirmar Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={handleChangeEmailConfirm}
          />
          {emailValidate!=false || emailConfirm =="" ? (
            ""
          ) : (
            <p className="errorEmail">*Los email no coinciden</p>
          )}
        </Col>

        <Col>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="name"
            placeholder="Nombre"
            onChange={handleChangeName}
          />
        </Col>

        <Col>
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Telefono"
            onChange={handleChangePhone}
          />
        </Col>
        <Col>
          <Link>
            <Button
              disabled={!(emailValidate == true && name !== "" && phone !== "")}
              variant="outline-primary"
              className="buttonfinalizarCompra"
              onClick={addDataFirebase}
            >
              Finalizar Compra
            </Button>
          </Link>
        </Col>
      </Form>
    );
  } else {
    return orderId !== null ? <Orden id={orderId} /> : "";
  }
}

export default DataBuyer;
