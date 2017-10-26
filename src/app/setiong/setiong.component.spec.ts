import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetiongComponent } from './setiong.component';

describe('SetiongComponent', () => {
  let component: SetiongComponent;
  let fixture: ComponentFixture<SetiongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetiongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetiongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
