import React, {useState, useEffect} from 'react'
import {getFireStore} from './firebase.js'
import * as firebase from 'firebase';
import '../css/Orden.scss'





function Orden(props) {
    const [detalleCompra, setDetalleCompra] = useState(null)
    
    useEffect(()=>{ 
        const db = getFireStore()
        const ordersCollection = db.collection("orders")
        const compra = ordersCollection.doc(props.id)
        compra.get().then((doc)=>{
            if(!doc.exists){
                console.log("No results!");
                return;
            }
            setDetalleCompra({id: doc.id, ...doc.data()});
        }).catch((error)=>{
            console.log("Error searching items", error);
        })
    },[]);


    if(detalleCompra!==null){
        return (
            <div className="detalleCompra">
                <p>Codigo de compra: {props.id}</p>
                <p>Nombre: {detalleCompra.buyers.nombre}</p>
                <p>Correo: {detalleCompra.buyers.correo}</p>
                <p>Telefono: {detalleCompra.buyers.telefono}</p>
                {detalleCompra.items.map((producto, i)=>{
                    return(<ul key={i}>
                             <li>{producto.titulo}</li>
                             <li>{producto.descripcion}</li>
                             <li>{producto.cantidad}</li>
                    </ul>
                   
                    )
                })}
            </div>
        )
    }else{
        return (<p>Cargando</p>)
    }
   
}

export default Orden
