import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeSecondComponent } from './about-me-second.component';

describe('AboutMeSecondComponent', () => {
  let component: AboutMeSecondComponent;
  let fixture: ComponentFixture<AboutMeSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
