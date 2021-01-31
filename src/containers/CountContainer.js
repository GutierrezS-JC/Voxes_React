import React, { useState } from 'react'
import { ItemCount } from '../components/ItemCount/ItemCount';

export const CountContainer = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        count >= stock ? alert(`Lo sentimos, nuestro stock actual es de ${stock} unidades`) : setCount(count + 1);

    }

    const sub = () => {
        count > 0 && setCount(count - 1);
    }

    const addToCart = () => {
        count >= 1 && count <= stock ? onAdd(count) : alert(`La cantidad ingresada es mayor a nuestro stock disponible`);
    }
    return (
        <ItemCount sub={sub} add={add} onAdd={addToCart} count={count} stock={stock} />
    )
}