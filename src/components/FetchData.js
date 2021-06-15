import React, {useEffect, useState} from 'react'

export default function FetchData() {
    const [data, setData] = useState(null)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((res)=>setData(res))
    },[])
    
    return (
        <div>   
            {data!==null ? 
            data.map((data,index)=>{
            return <p key={index} id={index}>{data.title}</p>})
            : "Cargando"
            }
        </div>
    )
}
