class NeoEmployee {    
    empId:number; 
    empName:string;
     empSalary:number;
    protected qualification :string;
    constructor(id=0,name="AAA",salary=1000){
        this.empId=id; 
        this.empName=name;
        this.empSalary=salary;
    }  
    getTA() : number  {
        return 0.1*this.empSalary;
    }
    getDetails():string{
        console.log("this is super class function");
        return  `ID=${this.empId} NAME=${this.empName} SALARY=${this.empSalary}`
    }
}
class NeoTrainer extends NeoEmployee{
    trainingExp:number;
    trainingTopics:string[];
    constructor(id:number,name:string,salary:number, exp=0,topics=['html']){
        let p=9;
        super(id,name,salary); // compulsory //
        this.trainingExp=exp;
        this.trainingTopics=topics;
    }
    getDetails():string{
        console.log("this is Trainer sub class function");
        return `${super.getDetails()}  Training Experience= ${this.trainingExp} years,  Topic of Training= ${this.trainingTopics}`
    }
} // hierarchy ended

let employee = new NeoEmployee(11,"Pooja",23000);
console.log("Employee details:");
console.log(employee.getDetails());

let trainer1=new NeoTrainer(456,"Veena",45000,23,['Java','Web','Node','GIT']); // superclass object, subclass object
console.log("Trainer details:");
console.log(trainer1.getDetails()); // function overriding : run time polymorphism




let neoEmp:NeoEmployee; // super type // upcasting
neoEmp=new NeoEmployee(22,'Kirti',56000);
let d1=neoEmp.getDetails(); // employee function
console.log(d1);

neoEmp=new NeoTrainer(999,'Janvhi',34000,10,['java','python']);
let d2=neoEmp.getDetails();  // trainer function
console.log(d2);


let emp1=new NeoEmployee(1,'Karuna',56000);
showDetails(emp1);
let tr1=new NeoTrainer(2,'kalpesh',34000,22,[]);
showDetails(tr1);

function showDetails(ob:NeoEmployee){
    // call getDetails function
    // if trainer object then trainer getDetails to be called
    // if employee object then employee getDetails to be called
    ob.getDetails();
}

