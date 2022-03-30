import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {


  
  @Output() changeNameEvent = new EventEmitter<string>(); 
  constructor() { }

  ngOnInit(): void {
  }

}
