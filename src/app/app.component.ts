import { Component } from '@angular/core';

import {Cake} from './Cake';
import { Tag } from './Tag';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoA';
  cakes:Cake[] = [];
  someData:number = 1;
  Tags:Tag[] = [];
  name:string = '';

  constructor(){
    this.fillCakes();
    this.fillTags()
  }
  fillTags() {
    this.Tags.push({content:'stuff',class:'primary'});
    this.Tags.push({content:'things',class:'success'});
    this.Tags.push({content:'objects',class:'info'});
    console.log(this.Tags);
  }
  fillCakes() {
    this.cakes.push({name:'chocolate',score:100});
    this.cakes.push({name:'vanill',score:80});
    this.cakes.push({name:'cheese',score:90});
  }

  addNumber():void{
    this.someData++;
  }

  changeName(name:string){
    this.name = name;
  }
}
