import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import underConstructions from './underConstructions.svg';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col><img alt="" src={underConstructions} /> </Col>
        </Row>
        <p className='text-center'>Sitio en construccion... naturalmente</p>
      </Container>
    </div>
  );
}

export default App;
