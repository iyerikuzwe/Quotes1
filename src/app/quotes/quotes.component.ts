import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes =[
    new Quote(1,"Change the world by being yourself.","Khalifatul Masih III","Owen",0,0,new Date(2018,7,10)),
    new Quote(2,"I have insecurities of course, but I don't hang out with anyone who points them out to me.","Adele","Queen Olive",0,0,new Date(2018,7,10)),
    new Quote(2,"I enjoy long romantic walks to the fridge.","Gift Lumumba","Annstella",0,0,new Date(2018,7,10)),
        ];
  toggleDetails(index){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
    this.quotes[index].showFan=!this.quotes[index].showFan;
  }
  upvote(index){
    this.quotes[index].upvotes++;
  }
  downvote(index){
    this.quotes[index].downvotes++;
  }
  deleteQuote(isComplete,index){
         if (isComplete){
             let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
 
             if(toDelete){
                 this.quotes.splice(index,1)
             }
         }
     }
     addNewQuote(quote){
      this.quotes.push(quote)
 
  }
  constructor() { }

  ngOnInit() {
  }

}
