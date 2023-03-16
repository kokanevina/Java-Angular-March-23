
class Employee {    

constructor(public empId=0,public empName="AAA",private empSalary=1000){

}

}// Employee body ended
// private properties of class can not be accessed outside of class
//
let emp1:Employee;
emp1=new Employee(345,"Omprakash",45000); // def constructor
console.log(JSON.stringify(emp1));
console.log(emp1.empId);

let emp2=new Employee(111,"Pooja",56000);
console.log(JSON.stringify(emp2));

let emp3=new Employee(); // 0-conr
console.log(JSON.stringify(emp3));

let emp4=new Employee(321,"Kiran"); // p-conr
console.log(JSON.stringify(emp4));