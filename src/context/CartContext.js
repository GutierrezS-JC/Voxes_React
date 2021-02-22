import React, { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [itemsCart, setItemsInCart] = useState([]);
    const MySwal = withReactContent(Swal)

    // Local Storage Get
    useEffect(() => {
        if (localStorage.getItem('voxesItemsCart') !== null) {
            setItemsInCart(JSON.parse(localStorage.getItem('voxesItemsCart')));
        }
    }, []);

    // Local Storage Update
    useEffect(() => {
        localStorage.setItem('voxesItemsCart', JSON.stringify(itemsCart));
    }, [itemsCart]);


    const addItem = (item, quantity) => {
        if (itemsCart.filter(items => item.item.id === items.item.id).length > 0) {
            MySwal.fire({
                title: 'Error',
                text: `Ya tenes el producto '${item.item.title}' en tu carrito`,
                icon: 'error',
            });
        }
        else {
            setItemsInCart([
                ...itemsCart,
                {
                    item: item.item,
                    quantity: quantity
                }
            ]);
        }
    }

    const removeItem = (itemID) => {
        setItemsInCart(itemsCart.filter((items) => items.item.id !== itemID))
    }


    const clear = () => setItemsInCart([]);

    return (
        <CartContext.Provider value={{ itemsCart, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}