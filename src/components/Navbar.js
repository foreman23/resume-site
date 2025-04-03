import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {

    return (
        <div>
            <Navbar expand="lg" className="NavBar">
                <Container style={{ display: 'flex', marginTop: '10px' }}>
                    <Navbar.Brand style={{ fontWeight: 'bold' }} href="/">Brandon Foreman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse style={{ marginLeft: '2%' }} id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="/" target='_blank'>RiftReport.gg</Nav.Link>
                            <Nav.Link href='/'>Other Projects</Nav.Link>
                            <Nav.Link href='/'>Skills</Nav.Link> */}
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="https://drive.google.com/file/d/1RXNTD941WEnflezCABpWKGZTqdPZwlyH/view?usp=sharing" target='_blank'>Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar