import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  angularWorksStatus = 0;
  javascriptStatus = 0;
  allWorksStatus = 1;
  Work1hoverActive = 0;
  Work2hoverActive = 0;
  Work3hoverActive = 0;
  Work4hoverActive = 0;


  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  showAllWorks() {
    this.angularWorksStatus = 0;
    this.javascriptStatus = 0;
    this.allWorksStatus = 1;
  }

  showJavascriptWorks() {
    this.javascriptStatus = 1;
    this.angularWorksStatus = 0;
    this.allWorksStatus = 0;

  }

  showAngularWorksStatus() {
    this.angularWorksStatus = 1;
    this.javascriptStatus = 0;
    this.allWorksStatus = 0;
  }

  mouseEnterw1(div: string) {
    this.Work1hoverActive = 1;
  }

  mouseLeavew1(div: string) {
    this.Work1hoverActive = 0;
  }

  mouseEnterw2(div: string) {
    this.Work2hoverActive = 1;
  }

  mouseLeavew2(div: string) {
    this.Work2hoverActive = 0;
  }

  mouseEnterw3(div: string) {
    this.Work3hoverActive = 1;
  }

  mouseLeavew3(div: string) {
    this.Work3hoverActive = 0;
  }

  mouseEnterw4(div: string) {
    this.Work4hoverActive = 1;
  }

  mouseLeavew4(div: string) {
    this.Work4hoverActive = 0;
  }


  openElpolloloco() {
    window.open("https://osman-bilgin.developerakademie.net/elpolloloco/index.html", "_blank");
  }

  openPokedex(){
    window.open("https://osman-bilgin.developerakademie.net/Pokedex/index.html", "_blank");
  }

  openSupergram(){
    window.open("https://osman-bilgin.developerakademie.net/instagram/index.html", "_blank");
  }

  openRingOfFire(){

  }

}
