import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
// 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,'Change your thoughts and you change your world.',' Norman Vincent ',new Date(2019,8,23)),
    new Quotes(2,'Those who realize their folly are not true fools. ','Zhuangzi ',new Date(2019,8,23)),
    new Quotes(3,'It always seems impossible until it’s done. ','Nelson Mandela ',new Date(2019,8,23)),
    new Quotes(4,'It’s better to be a lion for a day than a sheep all your life.','Elizabeth Kenny',new Date(2019,8,23))

  ];
  
  toggleDetails(index){
    this.quotes[index].showDescription= ! this.quotes[index].showDescription
  }
  deleteQuote(isComplete,index){
    if(isComplete){
        this.quotes.splice(index,1)
      
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate= new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
