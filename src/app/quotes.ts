export class Quotes {
    public showAuthor:boolean;
    public showFan:boolean;
    constructor(public id:number, public name:string, public author:string, public like:string, public upvotes:number, public downvotes:number, public notedDate:Date){
      this.showAuthor=false;
      this.showFan=false;
    }
  
  }