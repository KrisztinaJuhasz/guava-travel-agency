import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Destinations {
  [key: string]: string;
}

@Component({
  selector: 'app-destination-carousel',
  templateUrl: './destination-carousel.component.html',
  styleUrls: ['./destination-carousel.component.scss']
})
export class DestinationCarouselComponent implements OnInit {

  destinations: Destinations;

  constructor(private http: HttpClient) {
    this.destinations = {} as Destinations;
  }

  ngOnInit(): void {
    this.destinations = {
      mexico: '',
      argentina: '',
      brazil: '',
      peru: '',
      columbia: ''
    };

    this.http.get('assets/country-descriptions/mexico.txt', { responseType: 'text' }).subscribe((data: string): void => {
      this.destinations.mexico = data;
    });

    this.http.get('assets/country-descriptions/argentina.txt', { responseType: 'text' }).subscribe((data: string): void => {
      this.destinations.argentina = data;
    });
    
    this.http.get('assets/country-descriptions/brazil.txt', { responseType: 'text' }).subscribe((data: string): void => {
      this.destinations.brazil = data;
    });

    this.http.get('assets/country-descriptions/peru.txt', { responseType: 'text' }).subscribe((data: string): void => {
      this.destinations.peru = data;
    });

    this.http.get('assets/country-descriptions/columbia.txt', { responseType: 'text' }).subscribe((data: string): void => {
      this.destinations.columbia = data;
    });
    
  }

}
