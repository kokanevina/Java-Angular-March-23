//console.log(companyName);
//companyName="Neosoft";
//console.log(companyName);


// import Utility module and use Train class
import {Train, localTrainType, changeTrainType as changeType} from './Utility';
import stn from './Utility';

let train1=new Train();
train1.source="thane";
console.log(localTrainType);
//localTrainType="Central"; // normal variables imported from modules are not changeable
changeType("Central")
console.log(localTrainType);


let myStation=new stn();

import * as cp from './Campus';
let mycollage=new cp.College();
console.log(cp.universityName);
