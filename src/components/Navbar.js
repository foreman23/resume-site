import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {

    const navigate = useNavigate();

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
                            <Nav.Link href="https://drive.google.com/file/d/18HvTlkIGPFlGI9j91fLnQnZn7Z_jRU9P/view?usp=sharing" target='_blank'>Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar