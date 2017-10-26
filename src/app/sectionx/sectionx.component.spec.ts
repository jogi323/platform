import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionxComponent } from './sectionx.component';

describe('SectionxComponent', () => {
  let component: SectionxComponent;
  let fixture: ComponentFixture<SectionxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
