import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Void from '../../img/Void.svg';

import { Link } from 'react-router-dom';

export const NoCoincidence = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col className="col-12 col-md-6 ">
                    <h1 className="noMatch">Tan... vacio</h1>
                    <p className="noMatchP">Cuando miras demasiado tiempo a un abismo, el abismo tambien mira dentro de ti.</p>
                    <Link to="/"><Button variant="dark">Volver</Button> </Link>
                </Col>
                <Col className="col-12 col-md-6">
                    <img alt="notFound" className="img-fluid-max" style={{ maxWidth: "100%", height: "auto" }} src={Void} />
                </Col>
            </Row>
        </Container>
    )
}