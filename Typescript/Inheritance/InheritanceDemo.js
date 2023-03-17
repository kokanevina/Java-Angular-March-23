var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NeoEmployee = /** @class */ (function () {
    function NeoEmployee(id, name, salary) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "AAA"; }
        if (salary === void 0) { salary = 1000; }
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    NeoEmployee.prototype.getTA = function () {
        return 0.1 * this.empSalary;
    };
    NeoEmployee.prototype.getDetails = function () {
        //return "ID="+this.empId+" NAME="+this.empName+" SALARY="+this.empSalary; // string concatenation
        return "ID=".concat(this.empId, " NAME=").concat(this.empName, " SALARY=").concat(this.empSalary);
    };
    return NeoEmployee;
}());
var NeoTrainer = /** @class */ (function (_super) {
    __extends(NeoTrainer, _super);
    function NeoTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NeoTrainer.prototype.getTrainerDetails = function () {
        return "Training Experience= ".concat(this.trainingExp, " years,  Topic of Training= ").concat(this.trainingTopics);
    };
    return NeoTrainer;
}(NeoEmployee)); // hierarchy ended
var trainer1 = new NeoTrainer();
trainer1.empId = 567;
trainer1.empName = "Veena";
trainer1.empSalary = 80000;
trainer1.trainingExp = 23;
trainer1.trainingTopics = ['Java', 'Web', 'Node', 'GIT'];
console.log(trainer1.getDetails());
console.log(trainer1.getTrainerDetails());
// via sublclass object outside of hierarchy protected properties have no access.
