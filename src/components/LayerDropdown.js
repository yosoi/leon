import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function LayerDropdown(props) {
  const dropdownItems = props.layerTypes.map((layerType) =>
    <Dropdown.Item key={layerType}>
      {layerType}
    </Dropdown.Item>
  );
  return (
    <DropdownButton
      size="lg"
      title="Add Layer"
      variant="outline-primary"
    >
      {dropdownItems}
    </DropdownButton>
  );
}

export default LayerDropdown;
