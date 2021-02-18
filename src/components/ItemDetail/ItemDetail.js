import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { CountContainer } from '../../containers/CountContainer';

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
                <img className="imgDetail" src={item.pictureUrl} alt="imgDetail" />
            </Col>
            <Col className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div>
                    <h2>{item.title}</h2>
                </div>
                <hr />

                <h3><Badge variant="secondary">${item.price}</Badge></h3>
                <div className="mt-4">
                    <h5>Description</h5>
                    <p>{item.description}</p>
                </div>
                {quantity === 0 ? <CountContainer initial={1} stock={10} setQuantity={setQuantity} />
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