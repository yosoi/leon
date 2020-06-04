function main() {
  // TODO: Create WebAudio stuff

  this.configure = function(settings) {
    // TODO: Update WebAudio nodes using settings
    console.log(settings);
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
