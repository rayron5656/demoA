import { Component, OnInit } from '@angular/core';
import { MyHTTPService } from '../my-http.service';

@Component({
  selector: 'app-use-http',
  templateUrl: './use-http.component.html',
  styleUrls: ['./use-http.component.css']
})
export class UseHttpComponent implements OnInit {

  users:any = [];
  posts:any = [];

  constructor(private _myHttp:MyHTTPService) {
    this._myHttp.getUsers().subscribe((usersfromserver) => this.users = usersfromserver );
    this._myHttp.getPosts().subscribe((postfromserver) => this.posts = postfromserver);
   }

  ngOnInit(): void {
  }

}
