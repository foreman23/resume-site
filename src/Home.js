import { Container, Row, Col } from 'react-bootstrap';
import { Header } from 'semantic-ui-react';

import React from 'react'

const Home = () => {
  return (
    <div>
        <Container className='MainContainer'>
            <Header>Welcome to the Home Page</Header>
        </Container>
    </div>
  )
}

export default Home