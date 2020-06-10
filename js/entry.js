import Leon from "./leon.js"

const leonId = "leon";
const textId = "clickText";
let leon = null;

$(document).click(function() {
  if (leon === null) {
    $("#" + textId).hide();
    leon = new Leon(leonId);
  }
});
