import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar style={{ marginBottom: '5%' }} expand="lg" className="NavBar">
                <Container style={{ display: 'flex' }}>
                    <Navbar.Brand style={{ marginLeft: '10%', fontWeight: 'bold' }} href="/">Brandon Foreman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse style={{ marginLeft: '45%' }} id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar