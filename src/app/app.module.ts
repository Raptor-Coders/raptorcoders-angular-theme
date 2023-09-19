import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseIntroComponent } from './course-intro/course-intro.component';
import { HeaderComponent } from './header/header.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { CourseCurriculumComponent } from './course-curriculum/course-curriculum.component';
import { CourseRatingComponent } from './course-rating/course-rating.component';
import { CourseInstructorComponent } from './course-instructor/course-instructor.component';
import { CourseReviewComponent } from './course-review/course-review.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CourseFurtherInfoComponent } from './course-further-info/course-further-info.component';
import { CourseFurtherInfo2Component } from './course-further-info2/course-further-info2.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CourseIntroComponent,
    HeaderComponent,
    CourseOverviewComponent,
    CourseCurriculumComponent,
    CourseRatingComponent,
    CourseInstructorComponent,
    CourseReviewComponent,
    SubscribeComponent,
    CourseFurtherInfoComponent,
    CourseFurtherInfo2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
