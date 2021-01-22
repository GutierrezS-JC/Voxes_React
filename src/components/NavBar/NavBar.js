import React from 'react';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { Logo } from '../logo/voxesLogo';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        < Navbar collapseOnSelect expand='md' className="darkBanner" variant="dark">
            <Navbar.Brand href="/">
                <Logo />
                {' '}
                Voxes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav ' />
            <Navbar.Collapse id='responsive-navbar-nav ' >
                <Nav className='mr-auto pr-5'>
                    <NavItem>
                        <Link to="/" className="nav-link" style={{ color: "white" }}> Inicio </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/category/guitar" className="nav-link" style={{ color: "white" }}> Guitarras </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/category/pedal" className="nav-link" style={{ color: "white" }}> Pedales </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/category/amp" className="nav-link" style={{ color: "white" }}> Amplificadores </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/category/accesories" className="nav-link" style={{ color: "white" }}> Accesorios </Link>
                    </NavItem>
                    <NavItem>
                        <CartWidget />
                    </NavItem>
                </Nav>
                <div className="md-text-center">
                    <Link to="/" className="ml-md-2" style={{ color: " white" }}>Iniciar Sesion</Link>
                    <Button variant="light" className="ml-2">Registrarse</Button>
                </div>
            </Navbar.Collapse>
        </Navbar >
    )

}