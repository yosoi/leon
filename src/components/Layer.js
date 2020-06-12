import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Card from 'react-bootstrap/Card'
import CloseIcon from './icons/closeIcon.js'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import DownIcon from './icons/downIcon.js'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import LayerType from '../enums/layerType.js'
import RightIcon from './icons/rightIcon.js'
import Row from 'react-bootstrap/Row'
import UpIcon from './icons/upIcon.js'
import VolumeIcon from './icons/volumeIcon.js'

function Layer(props) {
  const layer = props.layer;
  return (
    <Card>
      <Card.Header>
        <ButtonToolbar>
          <Accordion.Toggle
            as={Button}
            eventKey={props.eventKey}
            variant="light"
            className="mr-2"
          >
            <RightIcon />
          </Accordion.Toggle>
          <InputGroup className="mr-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                {LayerType.properties[layer.type].icon}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder={LayerType.properties[layer.type].name}
              aria-label="Layer name field"
            />
          </InputGroup>
          <ButtonGroup className="mr-2">
            <Button variant="outline-secondary">S</Button>
            <Button variant="outline-secondary">M</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2">
            <Button variant="outline-secondary">
              <UpIcon />
            </Button>
            <Button variant="outline-secondary">
              <DownIcon />
            </Button>
          </ButtonGroup>
          <Button variant="light">
            <CloseIcon />
          </Button>
        </ButtonToolbar>
      </Card.Header>
      <Accordion.Collapse eventKey={props.eventKey}>
        <Card.Body>
          <Container>
            <Row className="mb-2">
              <Col>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      Min
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder={layer.min}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      Max
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder={layer.max}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      Gradient Mode
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <DropdownButton
                    title="Horizontal"
                    variant="secondary"
                  >
                  </DropdownButton>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      Blend Mode
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <DropdownButton
                    title="Normal"
                    variant="secondary"
                  >
                  </DropdownButton>
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default Layer;
