import Accordion from 'react-bootstrap/Accordion'
import LayerEditor from './LayerEditor.js'
import React from 'react';

function LayerStack({layers, onClose, onMoveUp, onMoveDown}) {
  const editors = layers.map((layer, index) =>
    <LayerEditor
      canMoveDown={index < layers.length - 1}
      canMoveUp={index > 0}
      eventKey={index + 1}
      key={index}
      layer={layer}
      onClose={() => onClose(index)}
      onMoveDown={() => onMoveDown(index)}
      onMoveUp={() => onMoveUp(index)}>
    </LayerEditor>
  );
  return (
    <Accordion>
      {editors}
    </Accordion>
  );
}

export default LayerStack;
