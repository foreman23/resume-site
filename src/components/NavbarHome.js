import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBarHome = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return (
        <div>
            <Navbar expand="lg" className="NavBar">
                <Container style={{ display: 'flex', marginTop: '10px' }}>
                    <Navbar.Brand style={{ fontWeight: 'bold' }} href="/">Brandon Foreman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse style={{ marginLeft: '2%' }} id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
                            <Nav.Link onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
                            <Nav.Link href="https://drive.google.com/file/d/1PhnpkAbG1oLbqNokK6Sm412q98qvA65I/view?usp=sharing" target='_blank'>Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBarHome