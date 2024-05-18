import React from 'react'
import{Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import{LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar  bg="dark" variant="dark"  expand = "lg" collapseOnSelect>
            <Container>
            <Navbar.Brand >Proshop</Navbar.Brand>
            <Navbar.Toggle arial-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav class="ms-auto">
                    <Nav.Link href="/Cart"><FaShoppingCart/>Cart</Nav.Link>
                    <Nav.Link href="/Login"><FaUser/>Sign in </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>


        </Navbar >


    </header>
  )
}

export default Header
