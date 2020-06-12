import BlendMode from "../enums/blendMode.js"

function main() {
  this.layers = [];
  this.evaluate = function(x, y) {
    const inputResults = this.layers.map(layer => layer.evaluate(x, y));
    const solo = inputResults.some(inputResult => inputResult.solo);
    const outputResults = {};
    inputResults.forEach((inputResult, i) => {
      if (!(inputResult.mute || (solo && !inputResult.solo))) {
        const outputResult = outputResults[inputResult.type];
        if (outputResult !== undefined) {
          switch (outputResult.blendMode) {
            case BlendMode.MAX:
              inputResult.value = Math.max(
                inputResult.value,
                outputResult.value
              );
              break;
            case BlendMode.MIN:
              inputResult.value = Math.min(
                inputResult.value,
                outputResult.value
              );
              break;
            case BlendMode.NORMAL:
            default:
              inputResult.value = outputResult.value;
          }
        }
        outputResults[inputResult.type] = inputResult;
      }
    });
    return outputResults;
  };
}

export default main
