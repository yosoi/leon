function main(onPointerDown, onPointerUp, onPointerMove) {
  const normalize = (bounds, x, y, action) => action(
    (x - bounds.left) / bounds.width,
    (y - bounds.top) / bounds.height
  );
  this.down = function(bounds, x, y) {
    normalize(bounds, x, y, onPointerDown);
  };
  this.up = onPointerUp;
  this.move = function(bounds, x, y) {
    normalize(bounds, x, y, onPointerMove);
  };
}

export default main
