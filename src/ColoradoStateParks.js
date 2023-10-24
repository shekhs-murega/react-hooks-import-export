import React from "react";
import HowManyParks from "./parks/HowManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees as parkTrees,
  wildlife as parkWildlife,} from "./parks/RockyMountain";

export default function ColoradoStateParks() 
{

  return (
    <div>
      <MesaVerde />
      <HowManyParks />
      <h1>{parkTrees} </h1>    
     { parkWildlife()}
    </div>
  );
}