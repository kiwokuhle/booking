import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';


import arr from '../Array.component'
import { TaskComponent } from '../task/task.component';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }



thing1 = "book now";
thing2 = 'book now';
thing3 = 'book now';
thing4 = 'book now';
thing5 = 'book now';
thing6 = 'book now';
thing7 = 'book now';

  Destination = arr[0];
  Checkin= arr[1];
  checkout= arr[2];
  Room= arr[3];
  Adults= arr[4];
  Children= arr[5];

  b1(){
    if (this.thing1 === 'book now')
    {
      this.thing1 = 'booked';
    }
    else{
      this.thing1 = 'book now';
    }
  }


  
 b2(){
    if (this.thing2 === 'book now')
    {
      this.thing2 = 'booked';
    }
    else{
      this.thing2 = 'book now';
    }
  }
  b3(){
    if (this.thing3 === 'book now') {

      this.thing3 = 'booked';
    }
    else {
      this.thing3 = 'book now';
    }
  }
  b4(){
    if (this.thing4 === 'book now')
    {
      this.thing4 = 'booked';
    }
    else{
      this.thing4 = 'book now';
    }
  }
  b5(){
    if (this.thing5 === 'book now')
    {
      this.thing5 = 'booked';
    }
    else{
      this.thing5 = 'book now';
    }
  }

  b6(){
    if (this.thing6 === 'book now')
    {
      this.thing6 = 'booked';
    }
    else{
      this.thing6 = 'book now';
    }
  }

  b7(){
    if (this.thing7 === 'book now'){

      this.thing7 = 'booked';
    }

    else{
      this.thing7 = 'book now';
    }
  }
  
  let dialogRef = dialog.open(ConfirmationComponent, {
    height: '400px',
    width: '600px',
  });

}