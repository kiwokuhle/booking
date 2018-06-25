import { Component, OnInit } from '@angular/core';

import arr from '../Array.component' ;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  Page(Destination , Checkin, checkout, Room, Adults, Children) {

              Destination = arr.push(Destination);
              Checkin = arr.push(Checkin) ;

              checkout = arr.push(checkout) ;
              Room = arr.push(Room) ;
              Adults = arr.push(Adults) ;
              Children = arr.push(Children) ;

              console.log(arr) ;

  }

}
