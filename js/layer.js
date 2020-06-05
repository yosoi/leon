import BlendMode from "./blendMode.js"
import GradientMode from "./gradientMode.js"

function main(
  a,
  b,
  type,
  blendMode = BlendMode.normal,
  gradientMode = GradientMode.radial,
  opacity = 1,
  muted = false
){
  this.min = Math.min(a, b);
  this.max = Math.max(a, b);
  this.type = type;
  this.blendMode = blendMode;
  this.gradientMode = gradientMode;
  this.opacity = opacity;
  this.muted = muted;
  this.evaluate = function(x, y) {
    const interpolant = 0;
    switch (this.mode) {
      case GradientMode.horizontal:
        interpolant = x;
        break;
      case GradientMode.vertical:
        interpolant = y
        break;
      case GradientMode.radial:
        interpolant = Math.abs(Math.hypot(x - 0.5, y - 0.5));
        break;
    }
    return {
      type: this.type,
      value: this.muted ? null : opacity * (this.min + (interpolant * (this.max - this.min)))
    }
  };
}

export default main;
