import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionmComponent } from './setionm.component';

describe('SetionmComponent', () => {
  let component: SetionmComponent;
  let fixture: ComponentFixture<SetionmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
