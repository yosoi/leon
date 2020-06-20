import BlendMode from '../enums/blendMode.js'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import React, { useEffect, useState } from 'react';

function BlendModeDropdown({layer}) {
  const [blendMode, setBlendMode] = useState(layer.blendMode)
  useEffect(() => {
    setBlendMode(layer.blendMode);
  }, [layer.blendMode]);
  const modeData = Object.values(BlendMode.properties);
  const dropdownItems = modeData.map((data) =>
    <Dropdown.Item
      as="button"
      eventKey={data.value}
      onClick={() => {
        setBlendMode(data.value);
      }}>
        {data.name}
      </Dropdown.Item>
  );
  return (
    <DropdownButton
      title={BlendMode.properties[blendMode].name}
      variant="secondary"
    >
      {dropdownItems}
    </DropdownButton>
  );
}

export default BlendModeDropdown
