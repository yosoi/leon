import React from 'react';
import BlendMode from '../enums/blendMode.js'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function main(props) {
  const modeData = Object.values(BlendMode.properties);
  const dropdownItems = modeData.map((data) =>
    <Dropdown.Item eventKey={data.value}>{data.name}</Dropdown.Item>
  );
  return (
    <DropdownButton
      title={BlendMode.properties[props.layer.blendMode].name}
      variant="secondary"
    >
      {dropdownItems}
    </DropdownButton>
  );
}

export default main
