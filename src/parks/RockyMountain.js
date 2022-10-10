import * as RMFunctions from "./parks/RockyMountain";

console.log(RMFunctions.trees);
// => "Aspen and Pine"

RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

RMFunctions.elevation();
// => Attempted import error

export const trees = "Aspen and Pine";

export function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}

export function elevation() {
  console.log("9583 ft");
}

export { trees, wildlife };
