import React, {useEffect,useState} from 'react'
import '../css/ItemDetailContainer.css'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function ItemDetailContainer(props) {
    const [producto, setProducto] = useState(null)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${props.id}`)
        .then((res)=>res.json())
        .then((res)=>setProducto(res))
    },[]) 

    return (
        producto!=null ? 
        <Container className="ItemDetailContainer">
            <Row>
                <Col xs={8}>
                    <ItemDetail title={producto.title} price={producto.price} image={producto.image} description={producto.description}></ItemDetail>
                </Col>
                <Col xs={4}>
                    <ItemCount stock="30" initial="1"/>      
                </Col>
                
            </Row>
        </Container>
        : <p>cargando</p>
    )
}

export default ItemDetailContainer
