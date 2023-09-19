import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFurtherInfoComponent } from './course-further-info.component';

describe('CourseFurtherInfoComponent', () => {
  let component: CourseFurtherInfoComponent;
  let fixture: ComponentFixture<CourseFurtherInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFurtherInfoComponent]
    });
    fixture = TestBed.createComponent(CourseFurtherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
