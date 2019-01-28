import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes =[
   new Quotes(1,"Education is the most powerful weapon which you can use to change the world.","Nelson"," Mandela",0,0,new Date(2019,29,1)),
   new Quotes(2,"I have insecurities of course, but I don't hang out with anyone who points them out to me.","Adele","Queen Olive",0,0,new Date(2019,29,1)),
   new Quotes(3,"Faith is taking the first step even when you don't see the whole staircase.","Martin Luther","King",0,0,new Date(2019,29,1)),
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