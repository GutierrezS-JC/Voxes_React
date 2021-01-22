import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {

    return (
        <Link key={item.id} to={`/item/${item.id}`} style={{ color: "inherit", textDecoration: "none" }}>
            <Card className="shadow-sm mb-4">
                <Card.Img className="card" variant="top" src={item.pictureUrl} />
                <Card.Body className="text-center">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="text-capitalize">
                        {item.category}
                        <br />
                        ${item.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link >
    )
}