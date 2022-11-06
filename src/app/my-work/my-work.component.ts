import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  angularWorksStatus = 1;
  javascriptStatus = 1;
  allWorksStatus = 1;
  gameEngineWorksStatus = 1;
  Work1hoverActive = 0;
  Work2hoverActive = 0;
  Work3hoverActive = 0;
  Work4hoverActive = 0;
  Work5hoverActive = 0;
  Work6hoverActive = 0;


  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  showAllWorks() {
    this.angularWorksStatus = 1;
    this.javascriptStatus = 1;
    this.allWorksStatus = 1;
    this.gameEngineWorksStatus = 1;
  }

  showJavascriptWorks() {
    this.javascriptStatus = 1;
    this.angularWorksStatus = 0;
    this.allWorksStatus = 0;
    this.gameEngineWorksStatus = 0;

  }

  showAngularWorksStatus() {
    this.angularWorksStatus = 1;
    this.javascriptStatus = 0;
    this.allWorksStatus = 0;
    this.gameEngineWorksStatus = 0;
  }

 showGameEngineWork(){
  this.angularWorksStatus = 0;
  this.javascriptStatus = 0;
  this.allWorksStatus = 0;
  this.gameEngineWorksStatus = 1;
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

  mouseEnterw5(div: string) {
    this.Work5hoverActive = 1;
  }

  mouseLeavew5(div: string) {
    this.Work5hoverActive = 0;
  }

  mouseEnterw6(div: string) {
    this.Work6hoverActive = 1;
  }

  mouseLeavew6(div: string) {
    this.Work6hoverActive = 0;
  }



  openElpolloloco() {
    window.open("https://osman-bilgin.developerakademie.net/elpolloloco/index.html", "_blank");
  }
  openElpollolocoGit() {
    window.open("https://github.com/OsmanBil/ElPolloLoco", "_blank");
  }

  openPokedex(){
    window.open("https://osman-bilgin.developerakademie.net/Pokedex/index.html", "_blank");
  }
  openPokedexGit(){
    window.open("https://github.com/OsmanBil/Pokedex", "_blank");
  }

  openSupergram(){
    window.open("https://osman-bilgin.developerakademie.net/instagram/index.html", "_blank");
  }
  openSupergramGit(){
    window.open("https://github.com/OsmanBil/supergram", "_blank");
  }

  openRingOfFire(){
    window.open("https://osman-bilgin.developerakademie.net/ringoffire/", "_blank");
  }
  openRingOfFireGit(){
    window.open("https://github.com/OsmanBil/ringoffire", "_blank");
  }
  
  openIslamiBilgiOyunu(){
    window.open("https://play.google.com/store/apps/details?id=tr.islami.bilgi.oyunu", "_blank");
  }

  openIslamiKelime(){
    window.open("https://play.google.com/store/apps/details?id=com.islami.kelime.oyunu", "_blank");
  }


}
