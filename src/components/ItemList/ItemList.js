import React from 'react';
import { useParams } from 'react-router-dom'
import { Item } from '../Item/Item';
import { CardColumns } from 'react-bootstrap';

export const ItemList = ({ items }) => {
    const { categoryId } = useParams();
    return (
        <React.Fragment>
            <CardColumns>
                {categoryId ? items.filter(item => item.category == categoryId).map(item => <Item key={item.id} item={item} />)
                    :
                    items && items.map(item => <Item key={item.id} item={item} />)
                }
            </CardColumns>
        </React.Fragment>
    )
}