import React from 'react';
import { Button } from 'react-bootstrap';
import { HiShoppingCart } from 'react-icons/hi';

export const CartWidget = () => {
    return (
        <Button variant="outline-light" className="mb-md-0 mb-2 ml-md-2 "><HiShoppingCart /></Button>
    )
}