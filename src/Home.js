import { Container, Row, Col, Nav} from 'react-bootstrap';
import { Header } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import React from 'react'

const Home = () => {
    return (
        <div>

            <Navbar></Navbar>

            <Container className='MainContainer'>
                <Row>
                    <Col>
                        <h1>Brandon Foreman</h1>
                        <h3>Software Engineer based in Portland, OR</h3>
                    </Col>
                    <Col>
                        2 of 2
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Home