import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyHTTPService {

  constructor(private client:HttpClient,private post:HttpClient) { 

  }

    getUsers(){
      return this.client.get('https://jsonplaceholder.typicode.com/users');
    }
    getPosts(){
      return this.post.get('https://jsonplaceholder.typicode.com/posts');
    }
}
