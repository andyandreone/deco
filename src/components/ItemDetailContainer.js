import React, {useEffect,useState} from 'react'
import '../css/ItemDetailContainer.css'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function ItemDetailContainer() {
    
    const [producto, setProducto] = useState(null)
    useEffect(()=>{

    const getItem = new Promise ((res,rej)=>{
        const item ={
            
                title:"Cuadro 1",
                precio:10,
                descripcon:"esta es la descripcion",
                imagen:"http://placehold.it/800x300"

                }
            setTimeout(
                () => item!=null ? res(item):rej('Error'),
                2000
            )  
    })
    getItem.then(item=> setProducto(item))

    },[])
    
    return (
        producto !=null ? 
        <Container className="ItemDetailContainer">
            <Row>
                <Col xs={8}>
                    <ItemDetail title={producto.title} precio={producto.precio} descripcion="Esta es la descripcion"></ItemDetail>
                </Col>
                <Col xs={4}>
                    <ItemCount stock="8" initial="1"/>      
                </Col>
                
            </Row>
        </Container>
        : <p>cargando</p>
    )
}

export default ItemDetailContainer
