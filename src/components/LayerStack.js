import Accordion from 'react-bootstrap/Accordion'
import LayerEditor from './LayerEditor.js'
import React, { useEffect, useState } from 'react';

function LayerStack({layerManager}) {
  const [layers, setLayers] = useState(layerManager.layers);
  useEffect(() => {
    console.log("layers updated");
  }, layerManager.layers)
  return (
    <Accordion>
      {layers.map((layer, index) =>
        <LayerEditor
          canMoveDown={index < layers.length - 1}
          canMoveUp={index > 0}
          eventKey={index + 1}
          key={index}
          layer={layer}
          onClose={() => {
            console.log("close");
          }}
          onMoveDown={() => {
            console.log("down");
          }}
          onMoveUp={() => {
            console.log("up");
          }}>
        </LayerEditor>
      )}
    </Accordion>
  );
}

export default LayerStack;
