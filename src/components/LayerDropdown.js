import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import LayerType from '../enums/layerType.js'

function LayerDropdown(props) {
  const layerData = Object.values(LayerType.properties);
  const dropdownItems = layerData.map((data) =>
    <Dropdown.Item
      key={data.value}
      onClick={() => {
        const newLayer = data.instance();
        console.log(newLayer);
        // TODO: add a layer to props.layerManager
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
