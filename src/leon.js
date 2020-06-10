import GradientMode from "./enums/gradientMode.js"
import InputHandler from "./controller/inputHandler.js"
import LayerManager from "./layers/layerManager.js"
import PitchLayer from "./layers/pitchLayer.js"
import Synth from "./synthesizer/synth.js"
import VolumeLayer from "./layers/volumeLayer.js"

function main() {
  const synth = new Synth();
  this.layerManager = new LayerManager();
  const pitch = new PitchLayer();
  pitch.gradientMode = GradientMode.radial;
  const volume = new VolumeLayer();
  volume.gradientMode = GradientMode.inverseRadial;
  this.layerManager.layers.push(pitch);
  this.layerManager.layers.push(volume);
  this.inputHandler = new InputHandler(
    (x, y) => {
      const settings = this.layerManager.evaluate(x, y);
      synth.on(settings);
    },
    () => synth.off(),
    (x, y) => {
      const settings = this.layerManager.evaluate(x, y);
      synth.configure(settings);
    }
  );
}

export default main
