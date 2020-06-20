import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import LayerType from '../enums/layerType.js'

function LayerDropdown({onItemClick}) {
  const layerData = Object.values(LayerType.properties);
  const dropdownItems = layerData.map((data) =>
    <Dropdown.Item
      key={data.value}
      onClick={() => {
        const newLayer = data.instance();
        onItemClick(newLayer);
      }}
    >
      <span>
        {data.icon}
      </span>
      <span>
        {data.name}
      </span>
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
