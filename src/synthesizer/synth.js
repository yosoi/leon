import LayerType from "../enums/layerType.js"
import * as Tone from "tone";

function main() {
  this.synth = new Tone.Synth().toMaster();
  this.configure = function(settings) {
    const pitch = settings[LayerType.PITCH]?.value;
    const volume = settings[LayerType.VOLUME]?.value;
    if (pitch !== undefined) this.synth.setNote(pitch);
    if (volume !== undefined) this.synth.volume.value = volume;
  };
  this.on = function(settings) {
    const pitch = settings[LayerType.PITCH]?.value;
    if (pitch !== undefined) this.synth.triggerAttack(pitch);
  };
  this.off = () => this.synth.triggerRelease();
}

export default main
