import React from "react";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import SitioEnConstruccion from "../components/SitioEnConstruccion";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from '../components/Cart';
import Orden from '../components/Orden';



function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={ItemListContainer} />
      <Route path="/productos" component={ItemListContainer} />
      <Route path="/contacto" component={SitioEnConstruccion} />
      <Route path="/orden" component={Orden} />
      <Route path="/cart">
        <Cart/>
      </Route>
      <Route path="/detalleProducto/:id" component={ItemDetailContainer} />
    </BrowserRouter>
  );
}

export default AppRouter;
