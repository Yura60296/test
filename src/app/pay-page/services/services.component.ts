import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ServicesService } from '../../shared/services/services.service';
import { CategoriesService } from '../../shared/services/categories.service';
import { Service } from '../../shared/models/service.model';
import { Category } from '../../shared/models/category.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private servicesService: ServicesService, private categoriesService: CategoriesService) { }

  url: string[] = [];
  services: Service[] = [];
  categories: Category[] = [];
  categoriesId: string[];
  s1: Subscription;
  s2: Subscription;
  s3: Subscription;
  

  ngOnInit() {
  	this.url = this.getUrl(this.router.url);
    this.getServices();

  	this.s1 = this.router.events.subscribe((event) => {
  	  this.services = [];
  	  if(typeof event['navigationTrigger'] !== "undefined") {
  	  	this.url = this.getUrl(event['url']);
  	  	this.getServices();
  	  }
	});
  }

  getUrl(param: string): string[] {
  	return param.split('/').filter((el)=>{ return el !== '' });
  }

  getServices(){
    if((this.url.length === 1) && (this.url[0] === 'services')) {
      this.s2 = this.servicesService.getServices().subscribe(
        (data: Service[])=>{this.services = data;},
        (error)=>{this.router.navigate(['/five/zero/zero']);}
      );
    } else if(this.url.length === 1) {
      this.s3 = this.servicesService.getServicesById(this.url[0]).subscribe(
        (data: Service[])=>{
          
          this.services = data;
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
    } else if(this.s3){
      this.s3.unsubscribe();
    }
  }

}
