

const num=67;
//num=90;

class Circle{
    readonly radius:number;
    static readonly pie:number=3.142;

    constructor(rad=0){
        this.radius=rad;
    }

    getArea(){
        return Circle.pie*this.radius*this.radius;
    }
}

let circle1=new Circle(23);
let circle2=new Circle(25);
console.log(circle1.radius); //23
console.log(circle2.radius); //25
//circle1.radius=45;
