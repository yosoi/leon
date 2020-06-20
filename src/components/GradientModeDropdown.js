import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import GradientMode from '../enums/gradientMode.js'
import React, { useEffect, useState } from 'react';

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
    <DropdownButton
      title={GradientMode.properties[gradientMode].name}
      variant="secondary"
    >
      {dropdownItems}
    </DropdownButton>
  );
}

export default GradientModeDropdown
