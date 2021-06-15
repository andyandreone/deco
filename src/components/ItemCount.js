import React from 'react'

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
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button className="onAdd" onClick={onAdd}>Agregar al carrito</button>
                <p>Cantidad Agregada {add}</p>
            </div>   
        </div>
    )
}
