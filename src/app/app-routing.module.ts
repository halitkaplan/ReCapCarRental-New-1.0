import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CarComponent } from './components/car/car.component';
import { CardInformationComponent } from './components/card-information/card-information.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CarspageComponent } from './components/pages/homepage/carspage/carspage.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SigninPageComponent } from './components/pages/signin-page/signin-page.component';
import { TiltCardComponent } from './components/tilt-card/tilt-card.component';

const routes: Routes = [

  {path: "", component:HomepageComponent},
  {path: "carspage", component:CarspageComponent},
  {path: "contactpage", component:ContactPageComponent},
  {path: "signinpage", component:SigninPageComponent},
  {path: "loginpage", component:LoginPageComponent},
  {path: "cardinformation", component:CardInformationComponent},
  {path: "tiltcard", component:TiltCardComponent},

  {path: "car/brand/:brandId", component:CarspageComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
