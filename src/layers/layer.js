import BlendMode from "../enums/blendMode.js"
import GradientMode from "../enums/gradientMode.js"

function main(
  a,
  b,
  type,
  blendMode = BlendMode.normal,
  gradientMode = GradientMode.vertical,
  opacity = 1,
  mute = false,
  solo = false
){
  this.min = Math.min(a, b);
  this.max = Math.max(a, b);
  this.type = type;
  this.blendMode = blendMode;
  this.gradientMode = gradientMode;
  this.mute = mute;
  this.solo = solo;
  this.evaluate = function(x, y) {
    let interpolant = 0;
    switch (this.gradientMode) {
      case GradientMode.horizontal:
        interpolant = x;
        break;
      case GradientMode.vertical:
        interpolant = 1 - y;
        break;
      case GradientMode.radial:
        interpolant = 2 * Math.abs(Math.hypot(x - 0.5, y - 0.5));
        break;
      case GradientMode.inverseRadial:
        interpolant = 1 - (2 * Math.abs(Math.hypot(x - 0.5, y - 0.5)));
        break;
    }
    interpolant = Math.max(0, Math.min(1, interpolant));
    return {
      blendMode: this.blendMode,
      mute: this.mute,
      solo: this.solo,
      type: this.type,
      value: this.min + (interpolant * (this.max - this.min))
    }
  };
}

export default main;
