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
                    <Nav.Link className='BackLinkNavBar' onClick={() => navigate(-1)}>Back</Nav.Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar