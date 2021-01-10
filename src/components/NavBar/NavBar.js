import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import voxes_logo from './img/voxes_logo.svg';

export const NavBar = () => {
    return (
        < Navbar collapseOnSelect expand='md' bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={voxes_logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Voxes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav ' />
            <Navbar.Collapse id='responsive-navbar-nav ' >
                <Nav className='ml-auto'>
                    <NavItem>
                        <Nav.Link href='#Inicio'> Inicio </Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href='#Categorias'> Categorias </Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href='#Carrito'> Mi Vox </Nav.Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )

}