function main(elementId, onpointerdown, onpointerup, onpointermove) {
  const element = document.getElementById(elementId);
  element.onpointerdown = onpointerdown;
  element.onpointerup = onpointerup;
  element.onpointermove = function(event){
    const bounds = element.getBoundingClientRect();
    const x = (event.x - bounds.left) / bounds.width;
    const y = (event.y - bounds.top) / bounds.height;
    onpointermove(x,y);
  };
}

export default main
