import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import GradientMode from '../enums/gradientMode.js'
import React, { useEffect, useState } from 'react'

function GradientModeDropdown({layer}) {
  const [gradientMode, setGradientMode] = useState(layer.gradientMode)
  useEffect(() => {
    setGradientMode(layer.gradientMode);
  }, [layer.gradientMode]);
  const modeData = Object.values(GradientMode.properties);
  const dropdownItems = modeData.map((data) =>
    <Dropdown.Item
      as="button"
      eventKey={data.value}
      onClick={() => {
        layer.gradientMode = data.value;
        setGradientMode(layer.gradientMode);
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
        variant="outline-secondary">
        {GradientMode.properties[gradientMode].name}
      </Dropdown.Toggle>
      <Dropdown.Menu
        alignRight>
        {dropdownItems}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default GradientModeDropdown
