import { Component, OnInit,Input } from '@angular/core';
import { Cake } from '../Cake';


@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  constructor() { }

  @Input() cake:Cake = {name:'',score:0}
  ngOnInit(): void {
  }

}
