import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncComponent } from './sectionc.component';

describe('SectioncComponent', () => {
  let component: SectioncComponent;
  let fixture: ComponentFixture<SectioncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectioncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectioncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
