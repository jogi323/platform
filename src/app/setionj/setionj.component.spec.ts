import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionjComponent } from './setionj.component';

describe('SetionjComponent', () => {
  let component: SetionjComponent;
  let fixture: ComponentFixture<SetionjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
