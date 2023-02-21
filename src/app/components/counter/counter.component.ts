import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IconDefinition, faPlane, faUserFriends, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  faPlane: IconDefinition;
  faUserFriends: IconDefinition;
  faCalendarCheck: IconDefinition;

  @ViewChild('counterFlights')
  counterFlightsRef: ElementRef<HTMLHeadingElement>;
  counterFlights: HTMLHeadElement; 
  flightsValue: number;

  @ViewChild('counterClients')
  counterClientsRef: ElementRef<HTMLHeadElement>;
  counterClients: HTMLHeadingElement;
  clientsValue: number;

  @ViewChild('counterEvents')
  counterEventsRef: ElementRef<HTMLHeadingElement>;
  counterEvents: HTMLHeadingElement;
  eventsValue: number;
  
  firstSeen: boolean;
  countUpOptions: CountUpOptions;

  constructor(private element: ElementRef<HTMLElement>) {
    this.faPlane = faPlane;
    this.faUserFriends = faUserFriends;
    this.faCalendarCheck = faCalendarCheck;
    this.counterFlightsRef = {} as ElementRef<HTMLHeadingElement>;
    this.counterFlights = {} as HTMLHeadingElement;
    this.flightsValue = undefined as unknown as number;
    this.counterClientsRef = {} as ElementRef<HTMLHeadingElement>;
    this.counterClients = {} as HTMLHeadingElement;
    this.clientsValue = undefined as unknown as number;
    this.counterEventsRef = {} as ElementRef<HTMLHeadingElement>;
    this.counterEvents = {} as HTMLHeadingElement;
    this.eventsValue = undefined as unknown as number;
    this.firstSeen = true;
    this.countUpOptions = {
      duration: 5
    };
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const boundingBox: DOMRect = this.element.nativeElement.getBoundingClientRect();
    const topPoint = boundingBox.top;
    const bottomPoint = boundingBox.bottom;

    if (topPoint >= 0 && bottomPoint <= window.innerHeight && this.firstSeen) {
      this.firstSeen = false;
      this.flightsValue = 1315;
      this.clientsValue = 5682;
      this.eventsValue = 13425;
    } else {
      this.flightsValue = undefined as unknown as number;
      this.clientsValue = undefined as unknown as number;
      this.eventsValue = undefined as unknown as number;
    }
  }

}
