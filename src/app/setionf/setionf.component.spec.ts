import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionfComponent } from './setionf.component';

describe('SetionfComponent', () => {
  let component: SetionfComponent;
  let fixture: ComponentFixture<SetionfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
