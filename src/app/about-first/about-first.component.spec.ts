import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFirstComponent } from './about-first.component';

describe('AboutFirstComponent', () => {
  let component: AboutFirstComponent;
  let fixture: ComponentFixture<AboutFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
