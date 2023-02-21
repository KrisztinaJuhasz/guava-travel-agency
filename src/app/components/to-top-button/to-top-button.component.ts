import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.scss']
})
export class ToTopButtonComponent implements OnInit {

  scrollPos: number;

  constructor() {
    this.scrollPos = 0;
  }

  ngOnInit(): void {
    fromEvent<WheelEvent>(document, 'scroll').subscribe((event: WheelEvent): void => {
      this.scrollPos = (<any>event).path[1].scrollY;
    });
  }

}
