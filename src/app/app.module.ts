import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CountUpModule } from 'ngx-countup';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DividerComponent } from './components/divider/divider.component';
import { ClientTestimonialComponent } from './components/client-testimonial/client-testimonial.component';
import { DestinationComponent } from './components/destination/destination.component';
import { DestinationCarouselComponent } from './components/destination-carousel/destination-carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToTopButtonComponent } from './components/to-top-button/to-top-button.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    DividerComponent,
    ClientTestimonialComponent,
    DestinationComponent,
    DestinationCarouselComponent,
    ContactComponent,
    ToTopButtonComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    CountUpModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
