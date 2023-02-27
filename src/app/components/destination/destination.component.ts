import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  @ViewChild('destinationText')
  destionationTextRef: ElementRef<HTMLParagraphElement>;
  destinationText: HTMLParagraphElement;

  textFade: boolean;

  constructor() {
    this.countryName = '';
    this.countryDescription = '';
    this.countryImage = '';
    this.destinationImageRef = {} as ElementRef<HTMLDivElement>;
    this.destinationImage = {} as HTMLDivElement;
    this.destionationTextRef = {} as ElementRef<HTMLParagraphElement>;
    this.destinationText = {} as HTMLParagraphElement;
    this.textFade = true;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.destinationImage = this.destinationImageRef.nativeElement;
    this.destinationImage.style.backgroundImage = `url(${this.countryImage})`;
    this.destinationText = this.destionationTextRef.nativeElement;

    const scroll$: Observable<WheelEvent> = fromEvent<WheelEvent>(this.destinationText, 'wheel');

    scroll$
      .pipe(
        map(() => this.destinationText.scrollHeight - this.destinationText.scrollTop <= this.destinationText.clientHeight),
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe((isAtBottom: boolean) => {
        this.textFade = !isAtBottom;
      });
  }

}
