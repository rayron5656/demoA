import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {


  someVar :string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.someVar = "hey " + (Math.random()*10).toString();
  }

}
