import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Row, Container, Col, Button, Badge } from 'react-bootstrap';
import { IoTrashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import emptyCart from '../../img/emptyCart.svg';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Cart = () => {

    const { itemsCart, removeItem, clear } = useContext(CartContext)
    const MySwal = withReactContent(Swal)

    const getTotalPrice = () => {
        let total = 0;
        itemsCart.map((element) => (total = total + element.item.price * element.quantity));
        return total;
    };

    const getTotalQuantityItems = () => {
        let total = 0;
        itemsCart.map((element) => (total = total + element.quantity));
        return total;
    }

    const buyAlert = () => {
        MySwal.fire({
            title: '¡Compra realizada!',
            text: 'Su compra ha sido registrada con exito',
            icon: 'success',
        })
    }

    const deleteAlert = (id) => {
        MySwal.fire({
            title: 'Borrar elemento',
            text: '¿Seguro que desea eliminar este producto de su carrito?',
            showCancelButton: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger',
            },
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            icon: 'question'
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(id)
            }
        })
    }

    const deleteAllAlert = () => {
        MySwal.fire({
            title: 'Wow...',
            text: '¿Seguro que queres vaciar el carrito?',
            icon: 'warning',
            buttonsStyling: false,
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger',
            },
            showCancelButton: true,
            confirmButtonText: 'Si, ya fue!',
            cancelButtonText: 'Mejor no',
        }).then((result) => {
            if (result.isConfirmed) {
                clear()
                MySwal.fire(
                    '¡Eliminado!',
                    'Tu carrito se ha vaciado con exito',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                MySwal.fire(
                    'Operacion cancelada',
                    'Esta bien, tu carrito esta seguro :)',
                    'error'
                )
            }
        })
    }


    return (
        <React.Fragment>
            <Container className="mt-4">

                {itemsCart.length > 0 ?
                    (
                        <>
                            <h2>Mi carrito</h2>
                            <div className="d-none d-md-block">
                                <Row className="mt-4">
                                    <Col className="col-6">
                                        <h6>Producto</h6>
                                    </Col>
                                    <Col className="col-2">
                                        <h6>Cantidad</h6>
                                    </Col>
                                    <Col className="col-2 ">
                                        <h6>Precio Unitario</h6>
                                    </Col >
                                </Row>
                            </div>
                            <hr style={{ height: "1px", border: "none", color: "#333", backgroundColor: "#333" }} />

                            {itemsCart.map((element) => (
                                <div key={element.item.id}>
                                    <div className="d-none d-md-block">
                                        <Row className="mt-4 ">
                                            <Col className="col-md-2 col-12 d-flex" >
                                                <img style={{ width: "6rem" }} src={element.item.pictureUrl} alt={element.item.title} />
                                            </Col>
                                            <Col className="col-md-4 col-12 d-flex" >
                                                <p className="justify-content-center align-self-center">{element.item.title}</p>
                                            </Col>
                                            <Col className="col-md-2 col-12 d-flex " >
                                                <p className="justify-content-center align-self-center ml-md-4">{element.quantity}</p>
                                            </Col>
                                            <Col className="col-md-2 col-12 d-flex"  >
                                                <p className="justify-content-center align-self-center ml-md-3" >${element.item.price}</p>
                                            </Col>
                                            <Col className="col-md-2 col-12 d-flex">
                                                <Button className="justify-content-center align-self-center" onClick={() => deleteAlert(element.item.id)} variant="dark"><IoTrashOutline /></Button>
                                            </Col>
                                        </Row>
                                        <hr key={'hr' + element.item.id} />
                                    </div>


                                    <div className="d-block d-md-none">
                                        <Row className="mt-4 text-center">
                                            <Col className="col-12 col-sm-6">
                                                <img style={{ width: "15rem" }} src={element.item.pictureUrl} alt={element.item.title} />
                                            </Col>
                                            <Col className="col-sm-6 mt-3">
                                                <Col className="col-sm-12">
                                                    <p>{element.item.title}</p>
                                                </Col>
                                                <Col className="col-sm-12" >
                                                    <p><b>Cantidad:</b> {element.quantity}</p>
                                                    <p><b>Precio:</b> ${element.item.price}</p>
                                                </Col>
                                                <Col className="col-sm-12">
                                                    <Button className="justify-content-center align-self-center" onClick={() => deleteAlert(element.item.id)} variant="dark"><IoTrashOutline /></Button>
                                                </Col>
                                            </Col>
                                        </Row>
                                        <hr />
                                    </div>
                                </div>

                            ))}
                            <hr style={{ height: "1px", border: "none", color: "#333", backgroundColor: "#333" }} />
                            <Row>
                                <Col className="col-sm-8 col-12">
                                    <div>
                                        <h6 className="text-secondary d-inline">Subtotal: </h6>
                                        <p className="d-inline p-2">${getTotalPrice()}</p>
                                    </div>

                                    <div>
                                        <h6 className="text-secondary d-inline">Impuestos: ∞ </h6>
                                    </div>

                                    <div>
                                        <h6 className="text-secondary d-inline">Costo de Envio: </h6>
                                        <p className="d-inline p-2">Gratis</p>
                                    </div>

                                    <div>
                                        <h6 className="text-secondary d-inline">Cantidad Items: </h6>
                                        <p className="d-inline p-2">{getTotalQuantityItems()}</p>
                                    </div>

                                    <div className="mt-4">
                                        <h6 className="d-inline">Total </h6>
                                        <p className="d-inline p-2">${getTotalPrice()}</p>
                                    </div>

                                    <Button className="mt-4" variant="dark" onClick={() => buyAlert()}>Confirmar Compra</Button>

                                </Col>
                                <Col className="col-sm-4 col-12 mt-5 mt-sm-0">
                                    <Link to="/"><Button variant="secondary">Seguir Comprando</Button> </Link>
                                    <br />
                                    <Button className="mt-2" variant="danger" onClick={() => deleteAllAlert()}>Vaciar Carrito <IoTrashOutline /></Button>
                                </Col>

                            </Row>
                        </>
                    )
                    : <Row>
                        <Col className="col-6">
                            <h1 className="noMatch">Carrito... vacio</h1>
                            <p className="noMatchP">Tan vacio que puedo escuchar mis pensamientos</p>
                            <Link to="/"><Button variant="dark">Seguir Comprando</Button> </Link>
                        </Col>
                        <Col className="col-6">
                            <img alt="notFound" className="img-fluid-max" style={{ maxWidth: "100%", height: "auto" }} src={emptyCart} />
                        </Col>
                    </Row>}

            </Container>
        </React.Fragment >
    )
}