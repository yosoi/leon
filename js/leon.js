import InputHandler from "./inputHandler.js"
import LayerManager from "./layerManager.js"
import Synth from "./synth.js"

function main(elementId) {
  const synth = new Synth();
  const layers = new LayerManager();
  const input = new InputHandler(
    elementId,
    () => synth.on(),
    () => synth.off(),
    (x, y) => {
      const settings = layers.evaluate(x, y);
      synth.configure(settings);
    }
  );
}

export default main
