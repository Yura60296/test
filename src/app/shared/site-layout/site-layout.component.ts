import { Component, OnInit } from '@angular/core';

import { Category } from '../models/category.model';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  constructor() { }

  loginModal: boolean = false;
  regModal: boolean = false;
  message: string = '';
  

  ngOnInit() {
  }

  openModalLogin(){
  	this.regModal = false;
  	this.loginModal = true;
  }
  openModalReg(){
  	this.loginModal = false;
  	this.regModal = true;
  }
  mesLogin(event){
    console.log(event);
    if(event != 1) {this.message = event; window.setTimeout(()=>{this.message = '';}, 1000);}
    this.regModal = false;
    this.loginModal = false;
  }

  mesReg(event){
    console.log(event);
    if(event != 1) {this.message = event; window.setTimeout(()=>{this.message = '';}, 1000);}
    this.regModal = false;
    this.loginModal = false;
  }

}
