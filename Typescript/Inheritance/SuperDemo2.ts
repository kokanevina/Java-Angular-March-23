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
        //return "ID="+this.empId+" NAME="+this.empName+" SALARY="+this.empSalary; // string concatenation
        return  `ID=${this.empId} NAME=${this.empName} SALARY=${this.empSalary}`
    }
}
class NeoTrainer extends NeoEmployee{
    trainingExp:number;
    trainingTopics:string[];
    
    constructor(id:number,name:string,salary:number, exp=0,topics=['html']){
        console.log("fxdfxgfd");
        let p=9;
        super(id,name,salary); // compulsory //
        this.trainingExp=exp;
        this.trainingTopics=topics;
    }
    getTrainerDetails(){
        return `Training Experience= ${this.trainingExp} years,  Topic of Training= ${this.trainingTopics}`
    }
} // hierarchy ended

let trainer1=new NeoTrainer(456,"Veena",45000,23,['Java','Web','Node','GIT']); // superclass object, subclass object
console.log(trainer1.getDetails());
console.log(trainer1.getTrainerDetails());
