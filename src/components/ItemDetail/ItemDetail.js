import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { CountContainer } from '../../containers/CountContainer';

export const ItemDetail = ({ item }) => {
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
                <CountContainer initial={1} stock={10} />
            </Col>
        </Row >
    )
}