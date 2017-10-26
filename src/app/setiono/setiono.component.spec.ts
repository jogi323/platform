import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionoComponent } from './setiono.component';

describe('SetionoComponent', () => {
  let component: SetionoComponent;
  let fixture: ComponentFixture<SetionoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
