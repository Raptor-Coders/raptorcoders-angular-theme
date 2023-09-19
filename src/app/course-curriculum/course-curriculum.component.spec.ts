import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCurriculumComponent } from './course-curriculum.component';

describe('CourseCurriculumComponent', () => {
  let component: CourseCurriculumComponent;
  let fixture: ComponentFixture<CourseCurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCurriculumComponent]
    });
    fixture = TestBed.createComponent(CourseCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
