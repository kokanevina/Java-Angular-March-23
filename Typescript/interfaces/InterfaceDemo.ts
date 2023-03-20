
interface ShapeIntf{
    getArea():number; // method signature
     area:number;     // variable signature
     diameter?:number;  // optional singature
     getPerimeter?():number;// optional singature
}

class Circle implements ShapeIntf{
    radius:number;
    static readonly pie=3.142;
    area:number;
    diameter:number;
    constructor(r=0){
        this.radius=r;
    }
    getArea():number{
        return Circle.pie*this.radius*this.radius;
    }
    getPerimeter():number{
        return  2*Circle.pie*this.radius;
    }
}

class Rectangle implements ShapeIntf{
    length:number;
    breadth:number;
    area: number;
    constructor(l=0,b=0){
        this.length=l;
        this.breadth=b;
    }    
    getArea():number{
        return this.length*this.breadth;
    }
}


let shape:ShapeIntf;
shape=new Rectangle(23,2);
console.log(shape.getArea());
 shape=new Circle(3);
 console.log(shape.getArea());
 