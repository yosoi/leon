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
        variant="light">
        <LoadIcon/>
        <span className="ml-2">Load</span>
      </Button>
      <Button
        variant="light">
        <SaveIcon />
        <span className="ml-2">Save</span>
      </Button>
    </ButtonGroup>
  );
}

export default SaveLoadButtonGroup
