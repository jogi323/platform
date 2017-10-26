import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionrComponent } from './setionr.component';

describe('SetionrComponent', () => {
  let component: SetionrComponent;
  let fixture: ComponentFixture<SetionrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
