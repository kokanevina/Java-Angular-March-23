export class Book {
    id:number;
    bookName:string;
    bookPrice:number;
    publishedDate:Date;
    constructor(id=0,name="AAA",price=0,date=new Date('1 Jan 2000')){
        this.id=id;
        this.bookName=name;
        this.bookPrice=price;
        this.publishedDate=date;
    }

    // instance methods
}



