import React from 'react'
import '../css/ItemCount.css'
import Button from 'react-bootstrap/Button'


export default function ItemCount({stock, initial}) {

    function restar(){
      if(count>1){setCount(count -1)}
    }

    function sumar(){
      if(count<stock){setCount(parseInt(count) +1)}
    }

    function onAdd(){
        setAdd(count);
    }

    const [count, setCount] = React.useState(initial);
    const [add, setAdd] = React.useState(0);
    return (
        <div>
            <div className="itemCount">
                <Button variant="secondary" onClick={restar}>-</Button>
                <p className="cantidadItemCount">{count}</p>
                <Button variant="secondary" onClick={sumar}>+</Button>
            </div>
            <div>
                <Button variant="info" onClick={onAdd}>Agregar al carrito</Button>
                <p>Cantidad Agregada {add}</p>
            </div>   
        </div>
    )
}
