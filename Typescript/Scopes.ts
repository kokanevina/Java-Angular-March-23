
class Employee {    
    public empId:number; 
    private empName:string;
    private empSalary:number;
    constructor(id=0,name="AAA",salary=1000){
        this.empId=id; 
        this.empName=name;
        this.empSalary=salary;
    }  
    get ename() : string{
        return this.empName
    }
    set ename(empName:string) {
        this.empName=empName;
    }

    get esalary():number{
        return this.empSalary
    }

    set esalary(empSalary:number){
        this.empSalary=empSalary;
    }

    getTA() : number  {
        return 0.1*this.empSalary;
    }
    getDetails():string{
        return  `ID=${this.empId} NAME=${this.empName} SALARY=${this.empSalary}`
    }
}// class ended
let emp1=new Employee(3,'Poonam',34000);
console.log(emp1.empId);
//console.log(emp1.empName);  // private varibles outside of class no access
console.log(emp1.ename);
//console.log(emp1.empSalary);
console.log(emp1.getTA());
//emp1.empName="Punam";
emp1.ename="Punam";

console.log(emp1.ename="Kiran");  // op?
console.log(emp1.ename);  // op?

let myname=emp1.ename="Hari";
console.log(myname); //op
