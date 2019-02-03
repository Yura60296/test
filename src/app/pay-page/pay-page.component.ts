import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriesService } from '../shared/services/categories.service';
import { Category } from '../shared/models/category.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.scss']
})
export class PayPageComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private categoriesService: CategoriesService) { }

  url: string[] = [];
  categories: Category[] = [];
  categoriesName: string[] = [];
  pages: string[] = ['about', 'faq', 'tariffs', 'bezopasnost', 'legal', 'services'];
  isLoaded = false;
  s1: Subscription;
  s2: Subscription;

  ngOnInit() {
    this.url = this.getUrl(this.router.url);

  	this.s1 = this.categoriesService.getCategories().subscribe(
      (data: Category[])=>{
    		this.categories = data;
        for(var i = 0; i < data.length; i ++) {
          this.categoriesName.push(data[i].id);
        }
        if(this.categoriesName.indexOf(this.url[0]) === -1 && this.pages.indexOf(this.url[0]) === -1) {
          this.router.navigate(['/not/found/page']);
        }
        this.isLoaded = true;
    	},
      (error)=>{this.router.navigate(['/five/zero/zero']);}
    );

    this.s2 = this.router.events.subscribe((event) => {
      if(typeof event['navigationTrigger'] !== "undefined") {
        this.url = this.getUrl(event['url']);
      }
    });

  }

  getUrl(param: string): string[] {
    return param.split('/').filter((el)=>{ return el !== '' });
  }

  ngOnDestroy(){
    if(this.s1){
      this.s1.unsubscribe();
    } else if(this.s2){
      this.s2.unsubscribe();
    }
  }

}
