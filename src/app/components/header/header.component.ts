import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('video')
  videoRef: ElementRef<HTMLVideoElement>;
  video: HTMLVideoElement;
  @ViewChild('scrollElement')
  scrollElementRef: ElementRef<SVGRectElement>;
  scrollElement: SVGRectElement;
  faBars: IconDefinition;

  constructor() {
    this.videoRef = {} as ElementRef<HTMLVideoElement>;
    this.video = {} as HTMLVideoElement;
    this.scrollElementRef = {} as ElementRef<SVGRectElement>;
    this.scrollElement = {} as SVGRectElement;
    this.faBars = faBars;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.video = this.videoRef.nativeElement;
    this.scrollElement = this.scrollElementRef.nativeElement;

    this.video.oncanplaythrough = (): void => {
      this.video.muted = true;
      this.video.play();
    }

    this.bounceScrollElement(this.scrollElement);
  }

  bounceScrollElement(scrollElement: SVGRectElement): void {
    const timeline: gsap.core.Timeline = gsap.timeline();

    timeline.to(scrollElement, {
      y: 10,
      delay: 2,
      duration: 1,
      ease: 'elastic'
    }).to(scrollElement, {
      y: 0,
      duration: 0.5,
      ease: 'elastic'
    }).repeat(-1);
  }

}
