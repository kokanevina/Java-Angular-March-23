export class BookDetails {
    bookId:number;
    isbnNumber:number;
    rating:number;
    bookType:string;
    constructor(id=0,isbn=0,rating=1,type=""){
        this.bookId=id;
        this.isbnNumber=isbn;
        this.rating=rating;
        this.bookType=type;
    }
}
