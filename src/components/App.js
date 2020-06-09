import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Controller from './Controller.js'
import LayerDropdown from './LayerDropdown.js'
import LayerStack from './LayerStack.js'
import LayerTypes from '../layers/layerTypes.js'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import Row from 'react-bootstrap/Row'

function App(props) {
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
            <Controller id="leon"/>
          </Col>
        </Row>
        <Row>
          <Col>

          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <LayerDropdown layerTypes={LayerTypes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <LayerStack layerManager={props.layerManager}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
