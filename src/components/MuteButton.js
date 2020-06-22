import ButtonGroup from 'react-bootstrap/ButtonGroup'
import MuteIcon from './icons/muteIcon.js'
import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'
import VolumeIcon from './icons/volumeIcon.js'

function MuteButton() {
  const [muted, setMuted] = useState(false)
  return (
    <ButtonGroup toggle>
      <ToggleButton
        checked={muted}
        onChange={(e) => {
          setMuted(e.currentTarget.checked)
        }}
        type="checkbox"
        variant={muted ? "danger" : "light"}
        >
        { muted ? <MuteIcon /> : <VolumeIcon />}
      </ToggleButton>
    </ButtonGroup>
  );
}

export default MuteButton;
