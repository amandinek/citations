import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
yesVotes=0
noVotes=0
highVotes=5
upVotes(){
  this.yesVotes=this.yesVotes+1
  if (this.yesVotes>this.highVotes){
    console.log('hhhhh')
  }
}
downVotes(){
  this.noVotes=this.noVotes+1
}

  constructor() { }

  ngOnInit() {
  }

}
