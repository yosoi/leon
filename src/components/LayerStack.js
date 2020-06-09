import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Layer from './Layer.js'

function LayerStack(props) {
  const layers = props.layerManager.layers.map((layer, index) =>
    <Layer
      eventKey={index + 1}
      key={index}
      layer={layer}
    />
  );
  return (
    <Accordion>
      {layers}
    </Accordion>
  );
}

export default LayerStack;
