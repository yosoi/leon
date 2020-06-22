import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Controller from './Controller.js'
import LayerDropdown from './LayerDropdown.js'
import LayerStack from './LayerStack.js'
import MuteButton from './MuteButton.js'
import Navbar from 'react-bootstrap/Navbar'
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row'

function App({leon}) {
  const [layers, setLayers] = useState([]);
  useEffect(() => {
    setLayers(leon.layerManager.layers)
  }, [leon.layerManager.layers])
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navbar>
              <Navbar.Brand className="mr-auto">Leon</Navbar.Brand>
              <MuteButton />
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller inputHandler={leon.inputHandler}/>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <LayerDropdown
              onItemClick={(newLayer) => {
                leon.layerManager.addLayer(newLayer);
                setLayers(leon.layerManager.layers);
              }}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <LayerStack
              layers={layers}
              onClose={(index) => {
                leon.layerManager.close(index);
                setLayers(leon.layerManager.layers);
              }}
              onMoveDown={(index) => {
                leon.layerManager.moveDown(index);
                setLayers(leon.layerManager.layers);
              }}
              onMoveUp={(index) => {
                leon.layerManager.moveUp(index)
                setLayers(leon.layerManager.layers);
              }}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
