import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BezopasnostPageComponent } from './bezopasnost-page.component';

describe('BezopasnostPageComponent', () => {
  let component: BezopasnostPageComponent;
  let fixture: ComponentFixture<BezopasnostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BezopasnostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BezopasnostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
