"use strict";
// module name is same as file name : Utility
exports.__esModule = true;
exports.Train = exports.changeTrainType = exports.localTrainType = void 0;
exports.localTrainType = "Harbour";
function changeTrainType(type) {
    exports.localTrainType = type;
}
exports.changeTrainType = changeTrainType;
var Train = /** @class */ (function () {
    function Train() {
    }
    return Train;
}());
exports.Train = Train;
