import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionbComponent } from './sectionb.component';

describe('SectionbComponent', () => {
  let component: SectionbComponent;
  let fixture: ComponentFixture<SectionbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
