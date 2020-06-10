import GradientMode from "./enums/gradientMode.js"
import InputHandler from "./controller/inputHandler.js"
import LayerManager from "./layers/layerManager.js"
import PitchLayer from "./layers/pitchLayer.js"
import Synth from "./synthesizer/synth.js"
import VolumeLayer from "./layers/volumeLayer.js"

function main(elementId) {
  const synth = new Synth();
  const layerManager = new LayerManager();
  const pitch = new PitchLayer();
  pitch.gradientMode = GradientMode.radial;
  const volume = new VolumeLayer();
  volume.gradientMode = GradientMode.inverseRadial;
  layerManager.layers.push(pitch);
  layerManager.layers.push(volume);
  const input = new InputHandler(
    elementId,
    (x, y) => {
      const settings = layerManager.evaluate(x, y);
      synth.on(settings);
    },
    () => synth.off(),
    (x, y) => {
      const settings = layerManager.evaluate(x, y);
      synth.configure(settings);
    }
  );
}

export default main
