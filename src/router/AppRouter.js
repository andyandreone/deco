import React from "react";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Orden from "../components/Orden";
import ItemListContainerCategories from "../components/ItemListContainerCategories";
import Footer from "../components/Footer";
import OrderList from "../components/OrderList";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={ItemListContainer} />
      <Route path="/productos" component={ItemListContainer} />
      <Route path="/orders" component={OrderList} />
      <Route
        path="/categoria/:categoryId"
        component={ItemListContainerCategories}
      />
      <Route path="/orden" component={Orden} />
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/detalleProducto/:id" component={ItemDetailContainer} />
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRouter;
