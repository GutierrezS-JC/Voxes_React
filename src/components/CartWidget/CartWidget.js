import React, { useContext } from 'react';
import { Button, Badge, Row, Col } from 'react-bootstrap';
import { HiShoppingCart } from 'react-icons/hi';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const context = useContext(CartContext);

    return (
        <Link to="/cart">
            <Button variant="outline-light" className="mb-md-0 mb-2 ml-md-2">
                <Row>
                    <Col>
                        <HiShoppingCart />
                    </Col>
                    {context.itemsCart.length > 0 &&
                        (<Col id="cartNumber">
                            <Badge variant="secondary">{context.itemsCart.length}</Badge>
                        </Col>)}
                </Row>
            </Button>
        </Link>
    );
}