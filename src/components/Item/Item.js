import React from 'react';
import { Card } from 'react-bootstrap';

export const Item = ({ item }) => {

    return (
        <React.Fragment>
            <Card className="shadow-sm mb-4">
                <Card.Img className="card" variant="top" src={item.pictureUrl} />
                <Card.Body className="text-center">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.category}
                        <br />
                            ${item.price}
                    </Card.Text>
                    <a href="#">Ver mas</a>
                </Card.Body>
            </Card>
        </React.Fragment >
    )
}