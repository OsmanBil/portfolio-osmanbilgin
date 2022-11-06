import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;

  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  toggleMenu1(): void {
   this.isMenuOpened = false;
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
