import { Container, Row, Col} from 'react-bootstrap';
import { Image, Icon, Button } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import React from 'react'

const Home = () => {
    return (
        <div>

            <Navbar></Navbar>

            <Container className='MainContainer'>
                <Row>
                    <Col lg={7}>
                        <div className='MainLeftColumn'>
                            <h1>Brandon Foreman</h1>
                            <h3>Software Engineer based in Portland, OR.</h3>
                            <Row>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                                    <p style={{ margin: 0, marginRight: 10 }}>Follow Me</p>
                                    <a href='https://github.com/foreman23' target='_blank' rel='noreferrer'><Icon color='black' name='github' size='big'></Icon></a>
                                    <a href='https://www.linkedin.com/in/brandon-foreman-92057b280/' target='_blank' rel='noreferrer'><Icon color='black' name='linkedin' size='big'></Icon></a>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <Button href='mailto:bforemana@gmail.com' primary>Send a Message</Button>
                                    <Button href='https://drive.google.com/file/d/1VbkeZc9g1s4rV7L2N8K2rsKbaQoJDLL6/view?usp=sharing' target='_blank'>My Resume</Button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='MainRightColumn'>
                            <Image circular src='/placeholder_circle.png'></Image>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Home