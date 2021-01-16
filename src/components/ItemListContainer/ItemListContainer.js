import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import underConstructions from './img/underConstructions.svg';
import { CountContainer } from '../../containers/CountContainer';

export const ItemListContainer = ({ greeting }) => {
    return (
        <Container>
            <Row>
                <Col><img alt="" src={underConstructions} /> </Col>
            </Row>
            <Row className="align-items-center justify-content-center">
                <Col xl={3} md={4} sm={6} xs={8}>
                    <CountContainer initial={1} stock={10} />
                </Col>
                <Col xl={3} md={4} sm={6} xs={8}>
                    <CountContainer initial={1} stock={10} />
                </Col>
                <Col xl={3} md={4} sm={6} xs={8}>
                    <CountContainer initial={1} stock={10} />
                </Col>
            </Row>
            <p className='text-center mt-5'>{greeting}</p>
        </Container >
    )
}