import React from 'react';
import { Button } from 'react-bootstrap';
import { HiShoppingCart } from 'react-icons/hi';

export const CartWidget = () => {
    return (
        <Button variant="outline-light"><HiShoppingCart /></Button>

    )
}