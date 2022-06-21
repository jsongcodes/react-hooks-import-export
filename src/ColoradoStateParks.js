import React from "react";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";


console.log(trees);

wildlife();

parkWildlife();


function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}
