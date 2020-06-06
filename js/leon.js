import InputHandler from "./inputHandler.js"
import LayerManager from "./layerManager.js"
import Synth from "./synth.js"
import VolumeLayer from "./volumeLayer.js"

function main(elementId) {
  const synth = new Synth();
  const layerManager = new LayerManager();
  layerManager.layers.push(new VolumeLayer());
  const input = new InputHandler(
    elementId,
    () => synth.on(),
    () => synth.off(),
    (x, y) => {
      const settings = layerManager.evaluate(x, y);
      synth.configure(settings);
    }
  );
}

export default main
