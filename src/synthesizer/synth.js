import LayerType from "../enums/layerType.js"
import * as Tone from "tone";

function main() {
  this.synth = new Tone.Synth().toMaster();
  this.configure = function(settings) {
    const pitch = settings[LayerType.PITCH].value;
    const volume = settings[LayerType.VOLUME].value;
    console.log(pitch, volume);
    this.synth.setNote(pitch);
    this.synth.volume.value = volume;
  };
  this.on = function(settings) {
    this.synth.triggerAttack(settings[LayerType.PITCH].value);
  };
  this.off = () => this.synth.triggerRelease();
}

export default main
