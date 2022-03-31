import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {


  total:number = 459;
  fee:number = 0.73546;
  birth:Date = new Date(1980,9,30);
  hobby:any = {
    title:'surf',
    isRisky:true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
