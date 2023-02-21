import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCarouselComponent } from './destination-carousel.component';

describe('DestinationCarouselComponent', () => {
  let component: DestinationCarouselComponent;
  let fixture: ComponentFixture<DestinationCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
