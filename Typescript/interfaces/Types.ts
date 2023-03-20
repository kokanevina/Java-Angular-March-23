interface A{
    num1:number;
}
interface B extends A{
    num2:number; // num1
    
}

class M implements B{
    num2:number;
    num1:number;
}

interface Father{
    dream():string;
}
interface Mother{
    dream():string;
}

interface Kid extends Father,Mother{
    goal():string; //+ inherited method sig
}


// multiple inheritance
class Child implements Father,Mother{
    dream(): string {
        return "Musician";
    }
}


class Child2 implements Kid{
    goal(): string {
       return "";
    }
    dream(): string {
        return "";
    }
  
}


class MM{

}

interface N{

}

//class P // is subclass of MM and implements N

class P extends MM implements N{

}

