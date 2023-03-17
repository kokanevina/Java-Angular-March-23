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

    getTrainerDetails(){
        return `Training Experience= ${this.trainingExp} years,  Topic of Training= ${this.trainingTopics}`
    }
} // hierarchy ended

let trainer1=new NeoTrainer();
trainer1.empId=567;
trainer1.empName="Veena";
trainer1.empSalary=80000;
trainer1.trainingExp=23;
trainer1.trainingTopics=['Java','Web','Node','GIT'];
console.log(trainer1.getDetails());
console.log(trainer1.getTrainerDetails());


// via sublclass object outside of hierarchy protected properties have no access.