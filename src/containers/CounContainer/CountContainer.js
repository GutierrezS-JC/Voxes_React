import React, { useState } from 'react'
import { ItemCount } from '../../components/ItemCount/ItemCount';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CountContainer = ({ initial, stock, setQuantity }) => {
    const MySwal = withReactContent(Swal)
    const [count, setCount] = useState(initial);

    const add = () => {
        stock === 0 ? MySwal.fire({
            title: 'Error',
            text: `Lo sentimos, actualmente no tenemos stock de este producto`,
            icon: 'error',
        })
            :
            count >= stock ? MySwal.fire({
                title: 'Error',
                text: `Lo sentimos, nuestro stock actual es de ${stock} unidades`,
                icon: 'error',
            }) : setCount(count + 1);
    }

    const sub = () => {
        count > 0 && setCount(count - 1);
    }

    const addToCart = () => {
        count >= 1 && count <= stock ? setQuantity(count) : MySwal.fire({
            title: 'Error',
            text: `La cantidad ingresada es mayor a nuestro stock disponible`,
            icon: 'error',
        })
    }
    return (
        <ItemCount sub={sub} add={add} addToCart={addToCart} count={count} stock={stock} />
    )
}