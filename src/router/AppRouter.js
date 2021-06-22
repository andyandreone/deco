import React from 'react'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'
import {BrowserRouter, Switch, Route, useParams} from 'react-router-dom'


function AppRouter() {
    function DetalleProducto() {
        let { item } = useParams();
        return <div>
                 <ItemDetailContainer id={item}/>
               </div>
      }
    
    return (
        <BrowserRouter>
              <NavBar/>
            <Switch>
                <Route exact path="/">
                    <ItemListContainer/> 
                </Route>
                <Route path="/productos">
                    <ItemListContainer/> 
                </Route>
                <Route path="/contacto">
                   <div>SECCION CONTACTO --- EN CONSTRUCCION</div>
                </Route>
                <Route path="/cart">
                    <div>SECCION CARRITO --- EN CONSTRUCCION</div>
                </Route>
                <Route path="/detalleProducto/:item">
                    <DetalleProducto/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
