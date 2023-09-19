import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFurtherInfo2Component } from './course-further-info2.component';

describe('CourseFurtherInfo2Component', () => {
  let component: CourseFurtherInfo2Component;
  let fixture: ComponentFixture<CourseFurtherInfo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFurtherInfo2Component]
    });
    fixture = TestBed.createComponent(CourseFurtherInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
