import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Change your thoughts and you change your world.',' Norman Vincent '),
    new Quotes('Those who realize their folly are not true fools. ','Zhuangzi '),
    new Quotes('It always seems impossible until it’s done. ','Nelson Mandela '),
    new Quotes('It’s better to be a lion for a day than a sheep all your life.','Elizabeth Kenny')

  ];
  
  toggleDetails(index){
    this.quotes[index].showDescription= ! this.quotes[index].showDescription
  }
  
  constructor() { }

  ngOnInit() {
  }

}
