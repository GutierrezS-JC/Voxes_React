import React, { useState } from 'react';
import { Jumbotron, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Banner = ({ setNotFound }) => {
    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <Jumbotron id="bannerBuscador" fluid className="imgJumbo">
            <div className="overlay" />
            <Container className="description">
                <h1>Voxes</h1>
                <p>
                    Powered by music
                </p>
                <Form inline onSubmit={handleSubmit}>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2 " onChange={e => setSearch(e.target.value)} />
                    <Button as={Link} to={`/search/${search}`} onClick={() => setNotFound(false)} variant="outline-light my-2 my-sm-0">Buscar</Button>
                </Form>
            </Container>
        </Jumbotron>
    )
}