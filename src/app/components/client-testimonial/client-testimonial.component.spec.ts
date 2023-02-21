import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTestimonialComponent } from './client-testimonial.component';

describe('ClientTestimonialComponent', () => {
  let component: ClientTestimonialComponent;
  let fixture: ComponentFixture<ClientTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
