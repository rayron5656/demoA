import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  constructor() { }
  myNum : number = 97;

  ngOnInit(): void {
  }
  randomize(){
    this.myNum = (Math.random() * 10);
    this.myNum = Math.floor(this.myNum);

  }
}
