import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    StepCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
