import React, { useEffect, useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function SoloMuteButtonGroup({layer}) {
  const [activeButtons, setActiveButtons] = useState([]);
  useEffect(() => {
    let newActiveButtons = [];
    if (layer.mute) newActiveButtons.push("mute");
    if (layer.solo) newActiveButtons.push("solo");
    setActiveButtons(newActiveButtons);
  }, [layer.mute, layer.solo])
  return (
    <ToggleButtonGroup
      className="mr-2"
      onChange={(newActiveButtons) => {
        layer.mute = newActiveButtons.includes("mute")
        layer.solo = newActiveButtons.includes("solo")
        setActiveButtons(newActiveButtons);
      }}
      type="checkbox"
      value={activeButtons}>
      <ToggleButton
        value={"solo"}
        variant="outline-secondary">
        S
      </ToggleButton>
      <ToggleButton
        value={"mute"}
        variant="outline-secondary">
        M
      </ToggleButton>
    </ToggleButtonGroup>
  );

  // const [data, setData] = useState([]);
  // return (
  //   <ToggleButtonGroup
  //     className="mr-2"
  //     onChange={(d) => {
  //
  //       console.log(d);
  //       setData(d);
  //     }}
  //     type="checkbox"
  //     value={data}
  //   >
  //     <ToggleButton value={"solo"} variant="outline-secondary">S</ToggleButton>
  //     <ToggleButton value={"mute"} variant="outline-secondary">M</ToggleButton>
  //   </ToggleButtonGroup>
  // );
}

export default SoloMuteButtonGroup
