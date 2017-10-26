import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatebankconfirmationComponent } from './initiatebankconfirmation.component';

describe('InitiatebankconfirmationComponent', () => {
  let component: InitiatebankconfirmationComponent;
  let fixture: ComponentFixture<InitiatebankconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiatebankconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatebankconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
