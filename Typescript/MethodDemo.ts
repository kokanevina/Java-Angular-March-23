function demo1(){
    //body
}

let demo2=function(){
    //body
}

let demo3=()=>{
    //body
}

class Employee {    
    empId:number; 
    empName:string;
    empSalary:number;
    constructor(id=0,name="AAA",salary=1000){
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
}

let emp1=new Employee(1,'Ram',56000);
let emp2=new Employee(2,'Pavan',34000);
console.log(emp1.getDetails());
console.log("TA of  employee "+emp1.empId+" is "+emp1.getTA());

console.log(emp2.getDetails());
console.log(`TA of  employee ${emp2.empId} is ${emp2.getTA()}`);

let olNode=document.createElement('ol');
let liNode1=document.createElement('li');
let liNode2=document.createElement('li');
let liNode3=document.createElement('li');
liNode1.textContent="ID="+emp1.empId;
liNode2.textContent=emp1.empName;
liNode3.textContent=emp1.empSalary+"";
olNode.append(liNode1,liNode2,liNode3);
document.body.append(olNode);
olNode.style.border="4px double green";
console.log(emp1.empId);
// for in loop
console.log("employee display...");
for(let key in emp1){
    console.log(key);
    console.log(emp1[key]);
  
}

let olNode2=document.createElement('ol');
for(let key in emp2){
    let liNode=document.createElement('li');
    liNode.textContent="ID="+emp1[key];
    olNode2.append(liNode);
}
document.body.append(olNode2);