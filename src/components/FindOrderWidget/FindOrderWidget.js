import React from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { getFirestore } from '../../firebase';

export const FindOrderWidget = () => {
    const MySwal = withReactContent(Swal)


    const searchAlert = async () => {
        const { value: orderId } = await Swal.fire({
            title: 'Datos de compra',
            input: 'text',
            icon: 'question',
            confirmButtonText: 'Buscar',
            text: 'Para ver los detalles de su compra ingrese el ID que le fue otorgado en el checkout',
            inputValidator: (value) => {
                if (!value) {
                    return 'Tenes que ingresar el ID'
                }
            }
        })
        if (orderId) {
            const db = getFirestore();
            const orderCollection = db.collection('orders');
            const order = orderCollection.doc(orderId);
            order.get().then((doc) => {
                if (!doc.exists) {
                    MySwal.fire({
                        title: 'Error',
                        icon: 'error',
                        text: 'No se pudo encontrar la orden con ese ID'
                    })
                }
                else {
                    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
                    let items = ""

                    items += doc.data().items.map((element) => `<div> ${element.item.title} <b>(${element.quantity})</b> </div>`).join('');
                    let total = doc.data().total;
                    let cliente = doc.data().buyer;
                    let date = doc.data().date.toDate();

                    Swal.fire({
                        title: 'Datos de compra',
                        html: ` <hr/>
                                <h4> Cliente </h4>
                                <div><b>Nombre:</b> ${cliente.name} ${cliente.lastname} </div>
                                <div><b>Email:</b> ${cliente.email}</div>
                                <hr/>
                                <h4 class="mt-4"> Items </h4>
                                <div>${items}</div>
                                <hr/>
                                <div class="mt-4"><b>Fecha:</b> ${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}</div>
                                <div class="mt-2"> <b>Total: $${total} </b></div>`
                    });
                }
            })
        }
    }
    /*const searchAlert = () => {
        MySwal.fire({
            title: 'Datos de compra',
            input: 'text',
            text: 'Para ver los detalles de su compra ingrese el ID que le fue otorgado en el checkout',
            icon: 'question',
            confirmButtonText: 'Buscar',
        }).then((result) => {
            if (result.isConfirmed) {
                const db = getFirestore();
                const orderCollection = db.collection('orders');
                const order = orderCollection.doc(idCompra);
                order.get().then((doc) => {
                    if (!doc.exists) {
                        MySwal.fire({
                            title: 'Error',
                        })
                    }
                })
            }
        })
    }*/

    return (
        <div className="md-text-center">
            <Button onClick={searchAlert} variant="outline-light">Datos de Compra</Button>
        </div>
    )
}