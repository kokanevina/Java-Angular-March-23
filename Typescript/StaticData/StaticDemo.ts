class NeoEmployee {    
    empId:number; 
    empName:string;
    empSalary:number;
    static companyName:string;  // static data gets loaded even b4 objects of that class gets created
    static{
        console.log("in static block1"); 
        NeoEmployee.companyName="Neosoft Technologies";
    }
    static{
        console.log("in static block2");
    }
    constructor(id=0,name="AAA",salary=1000){
        console.log("in constructor");
        this.empId=id; 
        this.empName=name;
        this.empSalary=salary;
    }  
    getTA() : number  {
        return 0.1*this.empSalary;
    }
    getDetails():string{
        //return "ID="+this.empId+" NAME="+this.empName+" SALARY="+this.empSalary; // string concatenation
        return  `ID=${this.empId} NAME=${this.empName} SALARY=${this.empSalary}`
    }

   static getCompany() :string{
        return NeoEmployee.companyName;
    }


    demo1(){
        console.log(NeoEmployee.companyName);
    }

    static demo2(e:NeoEmployee){
        console.log(e.empId);
        console.log(e.empName);
        console.log(e.empSalary);
    }
}

let emp1=new NeoEmployee();
let emp2=new NeoEmployee();

console.log(emp1.empName);
console.log(emp2.empName);
emp2.empName="Veena";

console.log(emp1.empName);
console.log(emp2.empName);
console.log(NeoEmployee.companyName);
NeoEmployee.companyName="Neosoft";
console.log(NeoEmployee.companyName);
let cname=NeoEmployee.getCompany();
console.log(cname);

NeoEmployee.demo2(emp1);
NeoEmployee.demo2(emp2);


