import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Controller from './Controller.js'
import LayerDropdown from './LayerDropdown.js'
import LayerStack from './LayerStack.js'
import MuteButton from './MuteButton.js'
import Navbar from 'react-bootstrap/Navbar'
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row'
import SaveLoadButtonGroup from './SaveLoadButtonGroup.js'

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
              <Navbar.Brand className="mr-auto">
                Leon | <span className="text-muted">a theramin</span>
              </Navbar.Brand>
              <MuteButton />
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller inputHandler={leon.inputHandler}/>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <Row className="mb-2">
              <Col>
                <Card className="pt-3 pb-3 px-3 border border-light">
                  <Row className="justify-content-between">
                    <Col className="col-auto align-self-center">
                      <span className="h3">
                        Layer Editor
                      </span>
                    </Col>
                    <Col className="col-auto">
                      <ButtonToolbar>
                        <SaveLoadButtonGroup/>
                        <LayerDropdown
                          onItemClick={(newLayer) => {
                            leon.layerManager.addLayer(newLayer);
                            setLayers(leon.layerManager.layers);
                          }}/>
                      </ButtonToolbar>
                    </Col>
                  </Row>
                </Card>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
