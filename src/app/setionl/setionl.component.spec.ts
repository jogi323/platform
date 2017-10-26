import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionlComponent } from './setionl.component';

describe('SetionlComponent', () => {
  let component: SetionlComponent;
  let fixture: ComponentFixture<SetionlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
