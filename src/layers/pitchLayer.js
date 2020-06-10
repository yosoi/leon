import Layer from "./layer.js"
import LayerType from "../enums/layerType.js"

function main() {
  return new Layer(
    100,
    10000,
    LayerType.pitch
  );
}

export default main