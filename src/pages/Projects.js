import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Image, Divider } from 'semantic-ui-react';
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <div>

        <Navbar></Navbar>

        <Container>
            <Row style={{ justifyContent:'center' }}>
                    <div style={{ marginTop: 20, marginBottom: 70, width: '85%' }}>
                        <h2 style={{ justifyContent: 'center', textAlign: 'center' }}>Projects</h2>
                        <Divider></Divider>
                        <Row>
                            <Col>
                                <Image src='https://placehold.co/600x400/EEE/31343C'></Image>
                            </Col>
                            <Col>
                                <Image src='https://placehold.co/600x400/EEE/31343C'></Image>
                            </Col>
                            <Col>
                                <Image src='https://placehold.co/600x400/EEE/31343C'></Image>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col>
                                <Image src='https://placehold.co/600x400/EEE/31343C'></Image>
                            </Col>
                            <Col>
                                <Image src='https://placehold.co/600x400/EEE/31343C'></Image>
                            </Col>
                            <Col>
                                <Image src='https://placehold.co/600x400/EEE/31343C'></Image>
                            </Col>
                        </Row>
                    </div>
                </Row>
        </Container>
    </div>
  )
}

export default Projects