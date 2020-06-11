import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

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
            <svg className="bi bi-caret-right-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </Accordion.Toggle>
          <InputGroup className="mr-2">
            <InputGroup.Prepend>
              <InputGroup.Text id="btnGroupAddon">
                <svg className="bi bi-music-note-beamed" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                  <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                </svg>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder={layer.type}
              aria-label={layer.type}
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
          <ButtonGroup className="mr-2">
            <Button variant="outline-secondary">S</Button>
            <Button variant="outline-secondary">M</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2">
            <Button variant="outline-secondary">
              <svg className="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
              </svg>
            </Button>
            <Button variant="outline-secondary">
              <svg className="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
            </Button>
          </ButtonGroup>
          <Button variant="light">
            <svg className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
              <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
            </svg>
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
                    placeholder="0"
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
                    placeholder="1"
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
