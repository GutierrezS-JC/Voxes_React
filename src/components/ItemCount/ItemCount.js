import React from 'react';
import { Button, Row } from 'react-bootstrap';


export const ItemCount = ({ sub, add, addToCart, count, stock }) => {

    return (
        <>
            <div className="pt-1 pb-3 mt-3 p-4" >
                <Row className="align-items-center justify-content-center">
                    <Button variant="dark" onClick={sub}>-</Button>
                    <p className="px-4">{count}</p>
                    <Button variant="dark" onClick={add}> + </Button>
                </Row>

                <Row className="align-items-center justify-content-center mt-3 mb-3">
                    <Button variant="outline-dark" disabled={count <= 0 || count > stock} onClick={addToCart}> Quiero Comprar </Button>
                </Row>
            </div>
        </>
    )
};
