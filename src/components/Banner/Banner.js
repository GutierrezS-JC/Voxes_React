import React from 'react';
import { Jumbotron, Container, Form, FormControl, Button } from 'react-bootstrap';

export const Banner = () => {
    return (
        <Jumbotron id="bannerBuscador" fluid className="imgJumbo">
            <div className="overlay" />
            <Container className="description">
                <h1>Voxes</h1>
                <p>
                    Powered by music
                  </p>
                <Form inline>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2 " />
                    <Button variant="outline-light my-2 my-sm-0">Buscar</Button>
                </Form>
            </Container>
        </Jumbotron>
    )
}