import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionrComponent } from './sectionr.component';

describe('SectionrComponent', () => {
  let component: SectionrComponent;
  let fixture: ComponentFixture<SectionrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
