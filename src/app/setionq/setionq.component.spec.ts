import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionqComponent } from './setionq.component';

describe('SetionqComponent', () => {
  let component: SetionqComponent;
  let fixture: ComponentFixture<SetionqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
