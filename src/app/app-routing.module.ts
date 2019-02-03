import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { TariffsPageComponent } from './tariffs-page/tariffs-page.component';
import { BezopasnostPageComponent } from './bezopasnost-page/bezopasnost-page.component';
import { LegalPageComponent } from './legal-page/legal-page.component';
import { PayPageComponent } from './pay-page/pay-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';



const routes: Routes = [
	{path:'', component: SiteLayoutComponent, children: [
		{path:'', component: HomePageComponent},
		{path:'home', component: HomePageComponent},
		{path:'about', component: AboutPageComponent},
		{path:'faq', component: FaqPageComponent},
		{path:'tariffs', component: TariffsPageComponent},
		{path:'bezopasnost', component: BezopasnostPageComponent},
		{path:'legal', component: LegalPageComponent},
		{path:'services', component: PayPageComponent},
		{path:':category', component: PayPageComponent, children: [
			{path:':servicename', component: PayPageComponent}
		]}
	]},
	{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
