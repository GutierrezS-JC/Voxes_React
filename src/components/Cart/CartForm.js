import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

export const CartForm = ({ handleUser, errorAlert }) => {
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        tel: '',
        email: '',
    })


    const validateForm = () => {
        if (user.name === '' || user.surname === '' || user.phone === '' || user.email === '' || user.emailConfirmation === '') {
            errorAlert('Por favor, completa todos los campos');
        } else {
            if (user.email !== user.emailConfirmation) {
                errorAlert('Por favor, verifica que tu email coincida en ambos campos');
            } else {
                handleUser(user);
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            validateForm()
        }
        setValidated(true);
    };

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    return (
        < Form className="formSize mt-5" noValidate validated={validated} onSubmit={handleSubmit} >
            <h2>Datos personales</h2>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" required onChange={handleChange} name='name' />

            </Form.Group>

            <Form.Group>
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu apellido" onChange={handleChange} required name='lastname' />

            </Form.Group>

            <Form.Group>
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu telefono" onChange={handleChange} required name='tel' />

            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" onChange={handleChange} required name='email' />
            </Form.Group>

            <Form.Group controlId="formBasicEmail2">
                <Form.Label>Confirma tu email</Form.Label>
                <Form.Control type="email" placeholder="Repeti tu email" onChange={handleChange} required name='emailConfirmation' />
                <Form.Text className="text-muted">
                    Nunca compartiremos tu direccion de email con otras personas
                </Form.Text>
            </Form.Group>

            <Button className="mt-2" variant="dark" type="submit">Confirmar Compra</Button>
        </Form >
    )
}