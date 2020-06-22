import React from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import LoadIcon from './icons/LoadIcon'
import SaveIcon from './icons/SaveIcon'

function SaveLoadButtonGroup() {
  return (
    <ButtonGroup
      className="mr-2">
      <Button
        variant="outline-secondary">
        Load
      </Button>
      <Button
        variant="outline-secondary">
        Save
      </Button>
    </ButtonGroup>
  );
}

export default SaveLoadButtonGroup
