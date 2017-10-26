import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionuComponent } from './sectionu.component';

describe('SectionuComponent', () => {
  let component: SectionuComponent;
  let fixture: ComponentFixture<SectionuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
