import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { globalAgent } from 'https';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Change your thoughts and you change your world.',' Norman Vincent ',new Date(2019,8,23)),
    new Quotes('Those who realize their folly are not true fools. ','Zhuangzi ',new Date(2019,8,23)),
    new Quotes('It always seems impossible until it’s done. ','Nelson Mandela ',new Date(2019,8,23)),
    new Quotes('It’s better to be a lion for a day than a sheep all your life.','Elizabeth Kenny',new Date(2019,8,23))

  ];
  
  toggleDetails(index){
    this.quotes[index].showDescription= ! this.quotes[index].showDescription
  }
  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete =confirm(`Do you want to delete the quote`)
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.completeDate= new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
