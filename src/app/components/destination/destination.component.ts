import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit, AfterViewInit {

  @Input('countryName')
  countryName: string;
  @Input('countryDescription')
  countryDescription: string;
  @Input('countryImage')
  countryImage: string;
  @ViewChild('destinationImage')
  destinationImageRef: ElementRef<HTMLDivElement>;
  destinationImage: HTMLDivElement

  constructor() {
    this.countryName = '';
    this.countryDescription = '';
    this.countryImage = '';
    this.destinationImageRef = {} as ElementRef<HTMLDivElement>;
    this.destinationImage = {} as HTMLDivElement;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.destinationImage = this.destinationImageRef.nativeElement;
    this.destinationImage.style.backgroundImage = `url(${this.countryImage})`;
  }

}
