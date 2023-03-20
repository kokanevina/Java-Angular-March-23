var NeoEmployee = /** @class */ (function () {
    function NeoEmployee(id, name, salary) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "AAA"; }
        if (salary === void 0) { salary = 1000; }
        console.log("in constructor");
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
(function () {
    console.log("in static block1");
    NeoEmployee.compnanyName = "Neosoft Technologies";
})();
(function () {
    console.log("in static block2");
})();
var emp1 = new NeoEmployee();
var emp2 = new NeoEmployee();
console.log(emp1.empName);
console.log(emp2.empName);
emp2.empName = "Veena";
console.log(emp1.empName);
console.log(emp2.empName);
console.log(NeoEmployee.compnanyName);
NeoEmployee.compnanyName = "Neosoft";
console.log(NeoEmployee.compnanyName);
