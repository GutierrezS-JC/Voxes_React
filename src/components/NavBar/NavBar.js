import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Logo } from '../logo/voxesLogo';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        < Navbar collapseOnSelect expand='md' className="dark-theme" variant="dark">
            <Navbar.Brand href="#home">
                <Logo />
                {' '}
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
                        <CartWidget />
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )

}