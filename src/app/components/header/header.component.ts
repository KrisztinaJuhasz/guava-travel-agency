import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { Typed } from 'rxjs-typed.ts';
import { fromEvent } from 'rxjs';

declare var bootstrap: any;

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

  animatedText: string;

  @ViewChild('hamburgerMenuOverlay')
  hamburgerMenuOverlayRef: ElementRef<HTMLDivElement>;
  hamburgerMenuOverlay: HTMLDivElement;

  @ViewChild('openHamburgerMenu')
  openHamburgerMenuRef: ElementRef<HTMLButtonElement>;
  openHamburgerMenu: HTMLButtonElement;

  constructor() {
    this.videoRef = {} as ElementRef<HTMLVideoElement>;
    this.video = {} as HTMLVideoElement;
    this.scrollElementRef = {} as ElementRef<SVGRectElement>;
    this.scrollElement = {} as SVGRectElement;
    this.faBars = faBars;
    this.animatedText = '';
    this.hamburgerMenuOverlayRef = {} as ElementRef<HTMLDivElement>;
    this.hamburgerMenuOverlay = {} as HTMLDivElement;
    this.openHamburgerMenuRef = {} as ElementRef<HTMLButtonElement>;
    this.openHamburgerMenu = {} as HTMLButtonElement;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.video = this.videoRef.nativeElement;
    this.scrollElement = this.scrollElementRef.nativeElement;
    this.hamburgerMenuOverlay = this.hamburgerMenuOverlayRef.nativeElement;
    this.openHamburgerMenu = this.openHamburgerMenuRef.nativeElement;

    this.video.oncanplaythrough = (): void => {
      this.video.muted = true;
      this.video.play();
    }

    const modal = new bootstrap.Offcanvas(this.hamburgerMenuOverlay);
    this.openHamburgerMenu.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      modal.toggle();
    });

    this.bounceScrollElement(this.scrollElement);
    this.animateText();
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

  animateText(): void {
    const textArray: string[] = [
      'Mexico',
      'Argentina',
      'Brazil',
      'Peru',
      'Columbia'
    ];

    const typed: Typed = new Typed({
      eraseDelay: { min: 40, max: 50 },
      errorMultiplier: 0
    });

    typed.text$.subscribe((text: string) => {
      this.animatedText = text;
    });

    const type = async (): Promise<void> => {
      textArray.forEach((text: string) => {
        typed
          .type(text)
          .wait(2000)
          .backspace(text.length);
      });

      typed
        .type('Guava Travel');
    
      await typed.run();
    };

    type();
  }

}
