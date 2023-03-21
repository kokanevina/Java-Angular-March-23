
// u can use any alphabet T/E/K/V
class TestEmployee<E> {
    empId:E
    constructor(eid:E){
        this.empId=eid;
    }
    getEmpId():E{
        return this.empId;
    }
}

let testemp1=new TestEmployee<string>("neo123");
console.log(testemp1.getEmpId());


let testemp2=new TestEmployee<number>(23);
console.log(testemp2.getEmpId());




class TestEmployee2<K,V>{
    empId:K;
    empSalary:V;
    constructor(eid:K,esal:V){
        this.empId=eid;
        this.empSalary=esal;
    }
}

let emp3=new TestEmployee2<Number,Number>(111,56000);

let emp4=new TestEmployee2<String,Number>("neo34",56000);


interface EmpIntf<E>{
    empId:E;
}

class InhouseTrainer implements EmpIntf<number>{
    empId:number;
}

class VisitingTrainer implements EmpIntf<string>{
    empId:string;
}

let itr1=new InhouseTrainer();
itr1.empId=1;

let itr2=new InhouseTrainer();
itr1.empId=2;

let itr3=new InhouseTrainer();
itr1.empId=3;

let vtr1=new VisitingTrainer();
vtr1.empId="neotemp1";
let vtr2=new VisitingTrainer();
vtr1.empId="neotemp2";
let vtr3=new VisitingTrainer();
vtr1.empId="neotemp3";


