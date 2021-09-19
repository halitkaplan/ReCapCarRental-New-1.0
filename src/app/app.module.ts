import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { StepCarComponent } from './components/step-car/step-car.component';
import { CarspageComponent } from './components/pages/homepage/carspage/carspage.component';
import { RouterModule, Routes } from '@angular/router';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SigninPageComponent } from './components/pages/signin-page/signin-page.component';
import { CardInformationComponent } from './components/card-information/card-information.component';
import { AngularTiltModule } from "angular-tilt";

import { TiltCardComponent } from './components/tilt-card/tilt-card.component';
import { CarComponent } from './components/car/car.component';


const appRoutes: Routes=[
  {path: 'carspage', component:CarspageComponent},
  {path: 'homepage',component:HomepageComponent},
  {path: "contactpage", component:ContactPageComponent},
  {path: "signinpage", component:SigninPageComponent},
  {path: "loginpage", component:LoginPageComponent},
  {path: "cardinformation", component:CardInformationComponent},
  {path: "tiltcard", component:TiltCardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    HomepageComponent,
    CarouselComponent,
    CarCardComponent,
    TestimonialCardComponent,
    StepCarComponent,
    CarspageComponent,
    CarFilterComponent,
    ContactPageComponent,
    LoginPageComponent,
    SigninPageComponent,
    CardInformationComponent,
    TiltCardComponent,
    CarComponent,


  ],
  imports: [
    BrowserModule,
    
    AngularTiltModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
