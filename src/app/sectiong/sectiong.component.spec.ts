import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiongComponent } from './sectiong.component';

describe('SectiongComponent', () => {
  let component: SectiongComponent;
  let fixture: ComponentFixture<SectiongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectiongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
