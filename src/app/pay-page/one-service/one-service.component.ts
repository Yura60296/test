import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServicesService } from '../../shared/services/services.service';
import { Service } from '../../shared/models/service.model';

@Component({
  selector: 'app-one-service',
  templateUrl: './one-service.component.html',
  styleUrls: ['./one-service.component.scss']
})
export class OneServiceComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private servicesService: ServicesService) { }

  url: string[] = [];
  oneService: Service;
  isLoad: boolean = false;
  s1: Subscription;
  s2: Subscription;

  ngOnInit() {
  	this.isLoad = false;
  	this.url = this.getUrl(this.router.url);
    this.getService();

  	this.s1 = this.router.events.subscribe((event) => {
  	  this.isLoad = false;
  	  if(typeof event['navigationTrigger'] !== "undefined") {
  	  	this.url = this.getUrl(event['url']);
        this.getService();
  	  }
  	});
  }

  getUrl(param: string): string[] {
  	return param.split('/').filter((el)=>{ return el !== '' });
  }

  getService(){
    if(this.url.length === 2){
      this.s2 = this.servicesService.getServiceById(this.url[0], this.url[1]).subscribe(
        (data: Service)=>{
          if(data['length'] == 0){this.router.navigate(['/not/found/page']);}
          this.oneService = data;
          this.isLoad = true;
        },
        (error)=>{this.router.navigate(['/five/zero/zero']);}
      );
    }
  }

  ngOnDestroy(){
    if(this.s1){
      this.s1.unsubscribe();
    } else if(this.s2){
      this.s2.unsubscribe();
    }
  }

}
