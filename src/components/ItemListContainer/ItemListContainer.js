import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import underConstructions from './img/underConstructions.svg';

export const ItemListContainer = ({ greeting }) => {
    return (
        <Container>
            <Row>
                <Col><img alt="" src={underConstructions} /> </Col>
            </Row>
            <p className='text-center'>{greeting}</p>
        </Container>
    )
}