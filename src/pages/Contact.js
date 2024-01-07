import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
        <Navbar></Navbar>

        <Container>
            <Row>
                <h1>Contact Me</h1>
            </Row>
        </Container>
    </div>
  )
}

export default Contact