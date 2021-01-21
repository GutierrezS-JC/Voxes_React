import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Tabs2 from '../../img/Tabs_2.png'
export const Footer = () => {
    return (
        <footer className="dark-theme text-white text-center text-lg-start mt-5">
            <Container className="p-4">
                <Row>
                    <Col className="col-lg-4 col-md-12 col-sm-12 col-12 mb-4 mb-md-0 p-4">
                        <h5 className="text-uppercase font-weight-lighter">De un musico a otro...</h5>
                        <a href="https://youtu.be/KDMvN45sjo4" style={{ color: "inherit", textDecoration: "none" }}>
                            <blockquote className="blockquote text-center">
                                <img src={Tabs2} width="100%" alt="tabs" />
                                <footer className="blockquote-footer font-weight-lighter ">That guy from <cite title="Source Title">Audioslave</cite></footer>
                            </blockquote>
                        </a>
                    </Col>

                    <Col className="col-lg-2 col-md-3 col-sm-6  col-6 mb-4 mb-md-0 p-4">
                        <h5 className="text-uppercase font-weight-lighter">Explora</h5>
                        <ul className="list-unstyled font-weight-lighter">
                            <li>
                                <a href="/" className="text-white">Inicio</a>
                            </li>
                            <li>
                                <a href="/" className="text-white">Buscador</a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="col-lg-2 col-md-3 col-sm-6 col-6 mb-4 mb-md-0 p-4">
                        <h5 className="text-uppercase font-weight-lighter">Seguinos</h5>
                        <ul className="list-unstyled font-weight-lighter">
                            <li>
                                <a href="/" className="text-white">Facebook</a>
                            </li>
                            <li>
                                <a href="/" className="text-white">Instagram</a>
                            </li>
                            <li>
                                <a href="/" className="text-white">Twitter</a>
                            </li>
                            <li>
                                <a href="/" className="text-white">Youtube</a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="col-lg-2 col-md-3 col-sm-6 col-6 mb-4 mb-md-0 p-4">
                        <h5 className="text-uppercase font-weight-lighter">Mi cuenta</h5>

                        <ul className="list-unstyled font-weight-lighter">
                            <li>
                                <a href="/" className="text-white">Ingresar</a>
                            </li>
                            <li>
                                <a href="/" className="text-white">Vender</a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="col-lg-2 col-md-3 col-sm-6 col-6 mb-4 mb-md-0 p-4">
                        <h5 className="text-uppercase font-weight-lighter">Legal</h5>
                        <ul className="list-unstyled font-weight-lighter">
                            <li>
                                <a href="/" className="text-white">Terminos</a>
                            </li>
                            <li>
                                <a href="/" className="text-white">Privacidad</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className="text-center p-3 font-weight-lighter" style={{ backgroundColor: "#00000080" }}>
                © 2021 Copyright:{' '}
                <a className="text-white" href="/">Voxes.com</a>
            </div>
        </footer >
    )
}