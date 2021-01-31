import React from 'react';
import { Button, Row } from 'react-bootstrap';
import './ItemCount.css';

export const ItemCount = ({ sub, add, onAdd, count, stock }) => {

    return (
        <>
            <div className="pt-1 pb-3 mt-3 p-4" >
                <Row className="align-items-center justify-content-center">
                    <Button variant="outline-danger" onClick={sub}>-</Button>
                    <p className="px-4">{count}</p>
                    <Button variant="outline-success" onClick={add}> + </Button>
                </Row>

                <Row className="align-items-center justify-content-center mt-3 mb-3">
                    <Button variant="outline-primary" disabled={count <= 0 || count > stock} onClick={onAdd}> Agregar al carrito </Button>
                </Row>
            </div>
        </>
    )
};
