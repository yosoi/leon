import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function LayerDropdown() {
  const layerData = [];
  const dropdownItems = layerData.map((data) =>
    <Dropdown.Item key={data.type}>
      {data.type}
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
