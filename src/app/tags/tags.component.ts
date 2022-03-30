import { Component, Input, OnInit } from '@angular/core';
import {Tag} from '../Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  
  @Input() tag:Tag = {content:'',class:''};
  constructor() { }
 

  ngOnInit(): void {
  }

}
