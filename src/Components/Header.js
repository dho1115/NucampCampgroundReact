import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import NucampLogo from '../app/assets/logo.png'

function Header() {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={NucampLogo} alt="Nucamp Logo" />
            </NavbarBrand>
        </Navbar>
    )
}

export default Header
