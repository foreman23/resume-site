import { Container, Row, Col } from 'react-bootstrap';
import { Image, Icon, Button, Divider } from 'semantic-ui-react';
import Navbar from '../components/NavbarHome';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {


    const navigate = useNavigate();

    return (
        <div>

            <Navbar></Navbar>

            <Container className='MainContainer'>

                {/* Home Section */}
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
                                    <Button href='mailto:bforemana@gmail.com' className='greenButton'>Send a Message</Button>
                                    <Button href='https://drive.google.com/file/d/1VbkeZc9g1s4rV7L2N8K2rsKbaQoJDLL6/view?usp=sharing' target='_blank'>My Resume</Button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='MainRightColumn'>
                            <Image style={{ boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)', border: '10px white solid' }} size='large' circular src='/mainPhoto.png'></Image>
                        </div>
                    </Col>
                </Row>

                {/* Project Section */}
                <Row style={{ justifyContent: 'center' }}>
                    <div style={{ marginTop: 140, width: '100%' }}>
                        <h2 id='projects' style={{ justifyContent: 'center', textAlign: 'center' }}>Projects</h2>
                        <Divider></Divider>
                        <Row style={{ marginTop: '25px' }}>
                            <Col>
                                <div className='projectCard' onClick={() => navigate('/blog-portal')}>
                                    <img className='projectImage' alt='blog portal' src='/images/projects/blog-portal/blog-portal-thumb.webp' bordered></img>
                                    <h3 className='projectCardTitle'>Blog Portal</h3>
                                    <p className='projectCardDesc'>Simple web application that allows for blog creation and management.</p>
                                    <div className='projectCardButtons'>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://master.d3b93eb65qaz8j.amplifyapp.com/blogs', '_blank'); }} className='greenButton'>Open Site</Button>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://github.com/foreman23/blog_portal', '_blank'); }}>GitHub Repo</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='projectCard' onClick={() => navigate('/spotter-site')}>
                                    <img className='projectImage' alt='spotter site' src='/images/projects/spotter-site/spotter-site-thumb.webp' bordered></img>
                                    <h3 className='projectCardTitle'>Planespotter Website React</h3>
                                    <p className='projectCardDesc'>Frontend website concept/prototype built in React for a friend.</p>
                                    <div className='projectCardButtons'>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://iridescent-dieffenbachia-dc0236.netlify.app/', '_blank'); }} className='greenButton'>Open Site</Button>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://github.com/foreman23/planespotter_site', '_blank'); }}>GitHub Repo</Button>
                                    </div>
                                </div>

                            </Col>
                            <Col>
                                <div className='projectCard' onClick={() => navigate('/rsvp-site')}>
                                    <img className='projectImage' alt='quince rsvp' src='/images/projects/rsvp-site/rsvp-site-thumb.webp' bordered></img>
                                    <h3 className='projectCardTitle'>Quinceañera RSVP Website</h3>
                                    <p className='projectCardDesc'>Digital RSVP page built for a client for their daughter's quince.</p>
                                    <div className='projectCardButtons'>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://melanie15.com/', '_blank'); }} className='greenButton'>Open Site</Button>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://github.com/foreman23/quince-rsvp', '_blank'); }}>GitHub Repo</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col>
                                <div className='projectCard' onClick={() => navigate('/aircraft-api')}>
                                    <img className='projectImage' alt='aircraft api' src='/images/projects/portfolio-api-thumb.webp' bordered></img>
                                    <h3 className='projectCardTitle'>Aircraft Cargo Management RESTful API</h3>
                                    <p className='projectCardDesc'>CS 493 Final Project. A RESTful API for managing cargo loads on aircraft.</p>
                                    <div className='projectCardButtons'>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://github.com/foreman23/portfolio-api', '_blank'); }}>GitHub Repo</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='projectCard' onClick={() => navigate('/twitter-bot')}>
                                    <img className='projectImage' alt='twitter bot' src='/images/projects/twitter-bot/twitter-bot-thumb.webp' bordered></img>
                                    <h3 className='projectCardTitle'>Twitter Headline Art Bot</h3>
                                    <p className='projectCardDesc'>Fun project utilizing Raspberry Pi and Python to build an AI powered art bot.</p>
                                    <div className='projectCardButtons'>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://twitter.com/NBA_ArtBot', '_blank'); }} color='twitter'>Open Twitter</Button>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://github.com/foreman23/news-twitter-bot', '_blank'); }}>GitHub Repo</Button>
                                    </div>
                                </div>

                            </Col>
                            <Col>
                                <div className='projectCard' onClick={() => navigate('/vet-panel')}>
                                    <img className='projectImage' alt='admin panel' src='/images/projects/vet-panel/vet-panel-thumb.webp' bordered></img>
                                    <h3 className='projectCardTitle'>Web Panel - Veterinary Drug App</h3>
                                    <p className='projectCardDesc'>Senior capstone group project. A webpanel for managing a database for a mobile application.</p>
                                    <div className='projectCardButtons'>
                                        <Button onClick={(e) => { e.stopPropagation(); window.open('https://github.com/katieschaum/vetwebapp', '_blank'); }}>GitHub Repo</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>

                {/* Skill Section */}
                <Row style={{ justifyContent: 'center' }}>
                    <div style={{ marginTop: 100, marginBottom: 70, width: '100%' }}>
                        <h2 id='skills' style={{ justifyContent: 'center', textAlign: 'center' }}>Skills</h2>
                        <Divider></Divider>
                        <Row>
                            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                                <Image className='skillLogo' size='tiny' src='/images/skills/js.webp'></Image>
                                <Image className='skillLogo' size='tiny' src='/images/skills/node.webp'></Image>
                                <Image className='skillLogo' size='tiny' src='/images/skills/react.webp'></Image>
                                <Image className='skillLogo' size='tiny' src='/images/skills/python.webp'></Image>
                            </div>
                        </Row>
                        <Row>
                            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                                <Image className='skillLogo' size='tiny' src='/images/skills/html.webp'></Image>
                                <Image className='skillLogo' size='tiny' src='/images/skills/css.webp'></Image>
                                <Image className='skillLogo' size='tiny' src='/images/skills/git.webp'></Image>
                                <Image className='skillLogo' size='tiny' src='/images/skills/firebase.webp'></Image>
                            </div>
                        </Row>
                    </div>
                </Row>

                {/* Contact Section */}
                <Row>
                    <div style={{ marginTop: 20, marginBottom: 140, width: '100%' }}>
                        <h2 style={{ justifyContent: 'center', textAlign: 'center' }}>Contact</h2>
                        <Divider></Divider>
                        <Row>
                            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                                <a className='skillLogo' href='https://github.com/foreman23' target='_blank' rel='noreferrer'><Icon color='black' name='github' size='huge'></Icon></a>
                                <a className='skillLogo' href='https://www.linkedin.com/in/brandon-foreman-92057b280/' target='_blank' rel='noreferrer'><Icon color='black' name='linkedin' size='huge'></Icon></a>
                                <a className='skillLogo' href='mailto:bforemana@gmail.com' target='_blank' rel='noreferrer'><Icon color='black' name='mail' size='huge'></Icon></a>
                            </div>
                        </Row>
                    </div>
                </Row>

            </Container>
        </div>
    )
}

export default Home