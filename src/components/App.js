import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Controller from './Controller.js'
import LayerDropdown from './LayerDropdown.js'
import LayerStack from './LayerStack.js'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import Row from 'react-bootstrap/Row'

function App({leon}) {
  const inputHandler = leon.inputHandler;
  const layerManager = leon.layerManager;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navbar>
              <Navbar.Brand>Leon</Navbar.Brand>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller inputHandler={inputHandler}/>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <LayerDropdown layerManager={layerManager}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <LayerStack layerManager={layerManager}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
