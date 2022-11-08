import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-first',
  templateUrl: './about-first.component.html',
  styleUrls: ['./about-first.component.scss']
})
export class AboutFirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  border: string = 'thin';
  hovered: string = 'thin';

  
  changeStyle($event){
    this.border = $event.type == 'mouseover' ? 'normal' : 'thin';
    this.hovered = $event.type == 'mouseover' ? 'hovered' : 'thin';
  }

}
