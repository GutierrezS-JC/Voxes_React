import React from 'react';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { Logo } from '../Logo/Logo';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        < Navbar collapseOnSelect expand='md' className="darkBanner" variant="dark">

            <Link className="navbar-brand" to="/" style={{ color: "white", textDecoration: "none" }}><Logo />
                {' '}
                Voxes
                </Link>

            <Navbar.Toggle aria-controls='responsive-navbar-nav ' />
            <Navbar.Collapse id='responsive-navbar-nav ' >
                <Nav className='mr-auto pr-5'>
                    <NavItem>
                        <NavLink to="/category/guitar" className="nav-link"> Guitarras </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/category/pedal" className="nav-link"> Pedales </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/category/amp" className="nav-link"> Amplificadores </NavLink>
                    </NavItem>
                    <NavItem>
                        <CartWidget />
                    </NavItem>
                </Nav>
                <div className="md-text-center">
                    <Link to="/" className="ml-md-2" style={{ color: " white" }}> <Button variant="outline-light">Iniciar Sesion</Button></Link>
                </div>
            </Navbar.Collapse>
        </Navbar >
    )

}