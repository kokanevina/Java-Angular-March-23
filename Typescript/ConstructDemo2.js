var Employee = /** @class */ (function () {
    function Employee(empId, empName, empSalary) {
        if (empId === void 0) { empId = 0; }
        if (empName === void 0) { empName = "AAA"; }
        if (empSalary === void 0) { empSalary = 1000; }
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
    }
    return Employee;
}()); // Employee body ended
// private properties of class can not be accessed outside of class
//
var emp1;
emp1 = new Employee(345, "Omprakash", 45000); // def constructor
console.log(JSON.stringify(emp1));
console.log(emp1.empId);
var emp2 = new Employee(111, "Pooja", 56000);
console.log(JSON.stringify(emp2));
var emp3 = new Employee(); // 0-conr
console.log(JSON.stringify(emp3));
var emp4 = new Employee(321, "Kiran"); // p-conr
console.log(JSON.stringify(emp4));
