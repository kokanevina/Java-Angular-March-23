"use strict";
//console.log(companyName);
//companyName="Neosoft";
//console.log(companyName);
exports.__esModule = true;
// import Utility module and use Train class
var Utility_1 = require("./Utility");
var train1 = new Utility_1.Train();
train1.source = "thane";
console.log(Utility_1.localTrainType);
//localTrainType="Central"; // normal variables imported from modules are not changeable
(0, Utility_1.changeTrainType)("Central");
console.log(Utility_1.localTrainType);
