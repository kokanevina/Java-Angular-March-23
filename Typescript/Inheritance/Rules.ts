class A{
     getObject(n:number) : NeoEmployee{
        return new NeoEmployee();
    }
}
class B extends A{ 
    public getObject() : NeoTrainer{
        return new NeoTrainer(11,'hari',45000);
    }
}
/*
1. if primitive, then return type should be same
2. if super class fun. return type void then subclass ov. function can have same/dift return type
 3. if super class fun. returning super type then
 subclass ov. fun can return same/ sub type
 scope: visibility can be same / increase but we can not decrease
 */

 // when we are not matching the signature then its not overriding

 let a:A; 
 a=new A();
 a.getObject(23);

 a=new B();
 a.getObject(45);