import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function SoloMuteButtonGroup() {
  const [data, setData] = useState([]);
  return (
    <ToggleButtonGroup
      className="mr-2"
      onChange={(d) => setData(d)}
      type="checkbox"
      value={data}
    >
      <ToggleButton value={1} variant="outline-secondary">S</ToggleButton>
      <ToggleButton value={2} variant="outline-secondary">M</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default SoloMuteButtonGroup
