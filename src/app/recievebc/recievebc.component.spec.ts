import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievebcComponent } from './recievebc.component';

describe('RecievebcComponent', () => {
  let component: RecievebcComponent;
  let fixture: ComponentFixture<RecievebcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievebcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievebcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
