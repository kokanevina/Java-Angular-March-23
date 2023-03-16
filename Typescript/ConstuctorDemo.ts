
class Employee {    
    empId:number; 
    empName:string;
    empSalary:number;

 /*     constructor(id:number,name:string,sal:number ){
        console.log("in p constructor");   
        this.empId=id; 
        this.empName=name;
        this.empSalary=sal;
    }  */
    //Multiple constructor implementations are not allowed.
    constructor(id=0,name="AAA",salary=1000){
        this.empId=id; 
        this.empName=name;
        this.empSalary=salary;
    } 
}// Employee body ended

let emp1:Employee;
emp1=new Employee(345,"Omprakash",45000); // def constructor
console.log(emp1.empId);
console.log(emp1.empName);
console.log(emp1.empSalary);

let emp2=new Employee(111,"Pooja",56000);
console.log(JSON.stringify(emp2));

let emp3=new Employee(); // 0-conr
console.log(JSON.stringify(emp3));

let emp4=new Employee(321,"Kiran"); // p-conr
console.log(JSON.stringify(emp4));