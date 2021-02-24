import React, { useState, useContext } from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { CountContainer } from '../../containers/CounContainer/CountContainer';

export const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext)
    const [quantity, setQuantity] = useState(0);

    const onAdd = () => {
        addItem(
            {
                item: item
            },
            quantity
        )
    }

    const resetCount = () => {
        setQuantity(0);
    }

    return (
        <Row className="itemDetail">
            <Col className="col-lg-6 col-md-12 col-sm-12 col-12">
                <img className="imgDetail" src={item.image} alt="imgDetail" />
            </Col>
            <Col className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div>
                    <h2>{item.title}</h2>
                </div>
                <hr />

                <h3><Badge variant="secondary">${item.price}</Badge></h3>
                <div className="mt-4">
                    <h5>Descripcion</h5>
                    <p>{item.description}</p>
                </div>
                {item.stock === 0 ? <><h5><b>Sin stock</b></h5> <CountContainer initial={0} stock={item.stock} setQuantity={setQuantity} /> </>
                    :
                    quantity === 0 ? <><h5><b>Stock: {item.stock}</b></h5> <CountContainer initial={1} stock={item.stock} setQuantity={setQuantity} /> </>
                        :
                        <React.Fragment>
                            <Row className="align-items-center justify-content-center mt-3 mb-3">
                                <Button variant='dark' onClick={onAdd} as={Link} to={`/cart`}>
                                    Agregar al carrito
                        </Button>
                            </Row>
                            <Row className="align-items-center justify-content-center mb-3">
                                <Button variant='outline-dark mb-4' onClick={resetCount}>
                                    Quiero modificar mi compra
                        </Button>
                            </Row>
                        </React.Fragment>
                }
            </Col>
        </Row >
    )
}