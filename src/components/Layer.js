import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Layer(props) {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          eventKey={props.eventKey}
          variant="link"
        >
          {props.layer.name}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={props.eventKey}>
        <Card.Body>
          {props.layer.name}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default Layer;
