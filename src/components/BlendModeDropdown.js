import BlendMode from '../enums/blendMode.js'
import Dropdown from 'react-bootstrap/Dropdown'
import './ModeDropdown.css';
import React, { useEffect, useState } from 'react'

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
        layer.blendMode = data.value;
        setBlendMode(layer.blendMode);
      }}>
        {data.name}
    </Dropdown.Item>
  );
  return (
    <Dropdown
      block
      className="flex-grow-1"
      drop="up">
      <Dropdown.Toggle
        block
        className="mode-dropdown"
        variant="outline-secondary">
        {BlendMode.properties[blendMode].name}
      </Dropdown.Toggle>
      <Dropdown.Menu
        alignRight>
        {dropdownItems}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BlendModeDropdown
