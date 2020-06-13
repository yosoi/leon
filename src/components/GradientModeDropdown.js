import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import GradientMode from '../enums/gradientMode.js'

function main(props) {
  const modeData = Object.values(GradientMode.properties);
  const dropdownItems = modeData.map((data) =>
    <Dropdown.Item eventKey={data.value}>{data.name}</Dropdown.Item>
  );
  return (
    <DropdownButton
      title={GradientMode.properties[props.layer.gradientMode].name}
      variant="secondary"
    >
      {dropdownItems}
    </DropdownButton>
  );
}

export default main
