function main() {
  //create a synth and connect it to the master output (your speakers)
  const s = new Tone.Synth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  s.triggerAttackRelease("C4", "8n");

  this.configure = function(settings) {
    // TODO: Update WebAudio nodes using settings
    console.log(settings[1]);
  };

  this.on = function() {
    // TODO: Turn note on
    console.log("ON");
  };

  this.off = function() {
    // TODO: Turn note off
    console.log("OFF");
  };
}

export default main
