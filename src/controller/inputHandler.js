function main(elementId, onPointerDown, onPointerUp, onPointerMove) {
  const element = document.getElementById(elementId);
  const normalize = function(event, action) {
    const bounds = element.getBoundingClientRect();
    action(
      (event.x - bounds.left) / bounds.width,
      (event.y - bounds.top) / bounds.height
    )
  };
  element.onpointerdown = function(event) {
    normalize(event, onPointerDown);
  };
  element.onpointerup = onPointerUp;
  element.onpointermove = function(event) {
    normalize(event, onPointerMove);
  };
}

export default main
