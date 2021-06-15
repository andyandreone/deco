import React, {useState} from 'react'
import Item from './Item'


function ItemList() {
   const [productos, setProductos] = useState(null)
    const promise = new Promise((resolve, reject)=>{
        const items = [
            {
                id:1,
                title:"Cuadro 1",
                price:10,
                image:"http://placehold.it/150x150"
            },
            {
                id:2,
                title:"Cuadro 2",
                price:20,
                image:"http://placehold.it/150x150"
            },
            {
                id:3,
                title:"Cuadro 3",
                price:30,
                image:"http://placehold.it/150x150"
            }
        ]
        setTimeout(
            () => items!=null ? resolve(items):reject('Error'),
            1000
        )
    })
        promise
        .then(items => setProductos(items))
        .catch(err => console.error(err))
    

    return(
    <div>
        { productos!=null?
        productos.map((data,index)=>{
                        return  <Item key={index} id={index}title={data.title}price={data.price} image={data.image}/>
                    })
         :<p>Cargando</p>       
        }
    </div>  
    )
}

export default ItemList
