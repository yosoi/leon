import Layer from "./layer.js"
import LayerType from "../enums/layerType.js"

function main() {
  return new Layer(
    -50,
    0,
    LayerType.volume
  );
}

export default main
