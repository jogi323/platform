import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionpComponent } from './setionp.component';

describe('SetionpComponent', () => {
  let component: SetionpComponent;
  let fixture: ComponentFixture<SetionpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
