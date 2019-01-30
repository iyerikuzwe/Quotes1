import { Component, OnInit,Input } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
// @Input() addQuote:addQuote;
export class QuotesComponent implements OnInit {
 quotes =[
   new Quotes(1,"Education is the most powerful weapon which you can use to change the world.","Nelson"," Mandela",0,0,new Date(2017,28,1)),
   new Quotes(2,"I have insecurities of course, but I don't hang out with anyone who points them out to me.","Adele","Queen Olive",0,0,new Date(2018,2,1)),
   new Quotes(3,"Faith is taking the first step even when you don't see the whole staircase.","Martin Luther","King",0,0,new Date(2012,29,1)),
   new Quotes(4,"Each life is made up of mistakes and learning, waiting and growing, practicing patience and being persistent.","Billy","Graham",0,0,new Date(2015,6,5)),
   new Quotes(5,"Courage is contagious. When a brave man takes a stand, the spines of others are often stiffened.","Billy","Graham",0,0,new Date(2018,7,8)),];
 toggleDetails(index){
   this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
   this.quotes[index].showFan=!this.quotes[index].showFan;
 }
 upvote(index){
   this.quotes[index].upvotes++;
 }
 downvote(index){
   this.quotes[index].downvotes--;
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