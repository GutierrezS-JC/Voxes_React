import React, { useState } from 'react'
import { ItemCount } from '../components/ItemCount/ItemCount';

export const CountContainer = ({ initial, stock }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        count >= stock ? alert(`Lo sentimos, nuestro stock actual es de ${stock} unidades`) : setCount(count + 1);

    }

    const sub = () => {
        count > 0 && setCount(count - 1);
    }

    const onAdd = () => {

        count <= stock ? alert(`Agregaste ${count} al carrito`) : alert(`La cantidad ingresada es mayor a nuestro stock disponible`);
    };

    return (
        <ItemCount sub={sub} add={add} onAdd={onAdd} count={count} />
    )
}