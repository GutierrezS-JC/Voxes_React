import React from 'react';
import { Item } from '../Item/Item';
import { CardColumns } from 'react-bootstrap';

export const ItemList = ({ items }) => {
    return (
        <React.Fragment>
            <CardColumns>
                {items && items.map(item => <Item key={item.id} item={item} />)}
            </CardColumns>
        </React.Fragment>
    )
}