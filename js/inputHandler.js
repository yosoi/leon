function main(elementId, onpointerdown, onpointerup, onpointermove) {
  const element = document.getElementById(elementId);
  element.onpointerdown = onpointerdown;
  element.onpointerup = onpointerup;
  element.onpointermove = function(event){
    let x = event.x;
    let y = event.y;
    // TODO: Return normalized position relative to element bounds
    onpointermove(x,y);
  };
}

export default main
