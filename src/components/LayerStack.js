import Accordion from 'react-bootstrap/Accordion'
import LayerEditor from './LayerEditor.js'
import React from 'react';

function LayerStack({layerManager}) {
  return (
    <Accordion>
      {layerManager.layers.map((layer, index) =>
        <LayerEditor
          canMoveDown={index < layerManager.layers.length - 1}
          canMoveUp={index > 0}
          eventKey={index + 1}
          key={index}
          layer={layer}
          onClose={() => layerManager.close(index)}
          onMoveDown={() => layerManager.moveDown(index)}
          onMoveUp={() => layerManager.moveUp(index)}>
        </LayerEditor>
      )}
    </Accordion>
  );
}

export default LayerStack;
