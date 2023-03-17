function demo1() {
    //body
}
var demo2 = function () {
    //body
};
var demo3 = function () {
    //body
};
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "AAA"; }
        if (salary === void 0) { salary = 1000; }
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    Employee.prototype.getTA = function () {
        return 0.1 * this.empSalary;
    };
    Employee.prototype.getDetails = function () {
        return "ID=" + this.empId + " NAME=" + this.empName + " SALARY=" + this.empSalary; // string concatenation
    };
    return Employee;
}());
var emp1 = new Employee(1, 'Ram', 56000);
var emp2 = new Employee(2, 'Pavan', 34000);
console.log(emp1.getDetails());
console.log("TA of  employee " + emp1.empId + " is " + emp1.getTA());
console.log(emp2.getDetails());
console.log("TA of  employee " + emp2.empId + " is " + emp2.getTA());
var olNode = document.createElement('ol');
var liNode1 = document.createElement('li');
var liNode2 = document.createElement('li');
var liNode3 = document.createElement('li');
liNode1.textContent = "ID=" + emp1.empId;
liNode2.textContent = emp1.empName;
liNode3.textContent = emp1.empSalary + "";
olNode.append(liNode1, liNode2, liNode3);
document.body.append(olNode);
olNode.style.border = "4px double green";
console.log(emp1.empId);
// for in loop
console.log("employee display...");
for (var key in emp1) {
    console.log(key);
    console.log(emp1[key]);
}
var olNode2 = document.createElement('ul');
for (var key in emp2) {
    var liNode = document.createElement('li');
    liNode.textContent = "ID=" + emp1[key];
    olNode2.append(liNode);
}
document.body.append(olNode2);
