import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { TariffsPageComponent } from './tariffs-page/tariffs-page.component';
import { BezopasnostPageComponent } from './bezopasnost-page/bezopasnost-page.component';
import { LegalPageComponent } from './legal-page/legal-page.component';
import { PayPageComponent } from './pay-page/pay-page.component';
import { OneServiceComponent } from './pay-page/one-service/one-service.component';
import { ServicesComponent } from './pay-page/services/services.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegistrationComponent } from './shared/components/registration/registration.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SiteLayoutComponent,
    AboutPageComponent,
    FaqPageComponent,
    TariffsPageComponent,
    BezopasnostPageComponent,
    LegalPageComponent,
    PayPageComponent,
    OneServiceComponent,
    ServicesComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
