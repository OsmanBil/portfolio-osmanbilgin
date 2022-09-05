import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent{
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentRoute = ' ';

  constructor(public router: Router) {

  }



}
