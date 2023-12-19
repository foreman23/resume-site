import { Container, Row, Col} from 'react-bootstrap';
import { Image, Icon, Button, Divider } from 'semantic-ui-react';
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
                            <h1 style={{ color: '#0E8A5F', fontWeight: 'bolder', fontSize: 32 }}>Brandon Foreman</h1>
                            <h3>Software Engineer based in Portland, OR.</h3>
                            <p style={{ width: '80%', fontSize: 16 }}>Hi, I’m Brandon, a Software Engineer located in Portland, Oregon. I have experience building all sorts of applications using JavaScript, React.js, Python, and more. My passion is in web development, both frontend and backend, but I enjoy and am knowledgeable in all aspects of software development. I have worked on projects for clients as well as for my own personal initiatives.</p>
                            <Row>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                                    <p style={{ margin: 0, marginRight: 10 }}>Follow Me</p>
                                    <a href='https://github.com/foreman23' target='_blank' rel='noreferrer'><Icon color='black' name='github' size='big'></Icon></a>
                                    <a href='https://www.linkedin.com/in/brandon-foreman-92057b280/' target='_blank' rel='noreferrer'><Icon color='black' name='linkedin' size='big'></Icon></a>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <Button href='mailto:bforemana@gmail.com' style={{backgroundColor: '#0E8A5F', color: 'white'}}>Send a Message</Button>
                                    <Button href='https://drive.google.com/file/d/1VbkeZc9g1s4rV7L2N8K2rsKbaQoJDLL6/view?usp=sharing' target='_blank'>My Resume</Button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='MainRightColumn'>
                            <Image size='large' circular src='/placeholder_circle.png'></Image>
                        </div>
                    </Col>
                </Row>

                {/* <Row style={{ justifyContent:'center' }}>
                    <div style={{ marginTop: 105, marginBottom: 70, width: '85%' }}>
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
                </Row> */}

            </Container>
        </div>
    )
}

export default Home