export class User {
    firstName:string;
    lastName:string;
    emailId:string;
    mobileNumber:string;
    username:string;
    password:string
    age:number;
    constructor(fname="AAA",lname="BBB",eid="YYY@y",mnumber="00",uname="AAA",password="",age=0){
        this.age=age;
        this.emailId=eid;
        this.firstName=fname;
        this.lastName=lname;
        this.mobileNumber=mnumber;
        this.password=password;
        this.username=uname;
    }
}
