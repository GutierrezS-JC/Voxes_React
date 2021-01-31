import React from 'react'
import { Row, Container, Col } from 'react-bootstrap';
export const Cart = () => {
    return (
        <React.Fragment>
            <Container >
                <Row>
                    <Col className="text-center">
                        <h1>Cart</h1>
                        <p> Tan vacio, que los productos escasean.</p>
                        <p> Tan vacio, que puedo escuchar mis pensamientos.</p>
                        <p> Tan vacio, que mi footer no se queda fijo al fondo.</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}