import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
yesVotes=0
noVotes=0
  
upVotes(){
  this.yesVotes=this.yesVotes+1
}
downVotes(){
  this.noVotes=this.noVotes+1
}
  constructor() { }

  ngOnInit() {
  }

}
