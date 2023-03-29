export class Author {
    authorId:string;
    authorName:string;
    authorAge:number;
    authorExp:number;

    constructor(aid="P",aname="ZZZ",aage=0,aexp=0){
        this.authorId=aid;
        this.authorAge=aage;
        this.authorExp=aexp;
        this.authorName=aname
    }
}
