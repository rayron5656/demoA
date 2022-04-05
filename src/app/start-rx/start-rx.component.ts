import { Component, OnInit } from '@angular/core';

import { concatMap, from, interval, Observable, of, timer } from 'rxjs';


@Component({
  selector: 'app-start-rx',
  templateUrl: './start-rx.component.html',
  styleUrls: ['./start-rx.component.css']
})
export class StartRXComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.try1();
    this.try4();
  }

  try2(){
    const myPromise = new Promise((resolve,reject) => {
      setTimeout(() => (resolve('resolved'),2000) );
    });

    /*myPromise.then((x) => console.log("you get X from resolve function within in this case: " + x));*/

    const observableFromPromise = from(myPromise);
    observableFromPromise.subscribe((x) => console.log('hey from observable + ',x));
  }
  try3(){
    const source = [1,2,3];
    const myObj = of(source);

    const o = timer(3000)
    .pipe(concatMap(() => source));


    o.subscribe((x) => console.log(x));


  }

  try4(){
    const myIntervalObservable = interval(1000);

    myIntervalObservable.subscribe((myData) => {
      console.log(myData);
    });
  }

  try1(){
    const myFirstObvservable = new Observable((observer) =>{
      observer.next('first info');
      observer.next('sec info');

    } )
    myFirstObvservable.subscribe((someData) =>{
      console.log(someData);
    })
  }

}
