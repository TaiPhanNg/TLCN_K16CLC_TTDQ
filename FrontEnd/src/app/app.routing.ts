import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CustomerComponent } from './views/customer/customer.component';
import { CustomerTypeComponent } from './views/customer-type/customer-type.component';
import { AppGuard } from './app.guard';
import { UserTypeComponent } from './views/user-type/user-type.component';
import { UserComponent } from './views/user/user.component';
import { ClassComponent } from './views/class/class.component';
import { StudentComponent } from './views/student/student.component';
import { LectureDashboardComponent } from './views/lecture-dashboard/lecture-dashboard.component';
import { LectureClassComponent } from './views/lecture-class/lecture-class.component';
import { LectureClassDetailComponent } from './views/lecture-class/lecture-class-detail.component';
import { LectureSubjectComponent } from './views/lecture-subject/lecture-subject.component';
import { LectureTestDetailComponent } from './views/lecture-test-detail/lecture-test-detail.component';
import { StudentClassComponent } from './views/student-class/student-class.component';
import { StudentSubjectComponent } from './views/student-subject/student-subject.component';
import { StudentTestComponent } from './views/student-test/student-test.component';
import { SubjectComponent } from './views/subject/subject.component';
import { SubjectComponent1 } from './views/subject 1/subject1.component';
import { SubjectComponent2 } from './views/subject 2/subject2.component';
import { SubjectComponent3 } from './views/subject 3/subject3.component';
import { SubjectComponent4 } from './views/subject 4/subject4.component';
import { SubjectComponent5 } from './views/subject 5/subject5.component';
import { SubjectComponent6 } from './views/subject 6/subject6.component';
import { SubjectComponent7 } from './views/subject 7/subject7.component';
import { QuizComponent } from './views/quiz/quiz.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'myclasses',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'student',
    component: StudentClassComponent,
    data: {
      title: 'Student Page'
    }
  },
  {
    path: 'studentsubject/:id',
    component: StudentSubjectComponent,
    data: {
      title: 'Student Subject'
    }
  },
  {
    path: 'studenttest/:id',
    component: StudentTestComponent,
    data: {
      title: 'Student Test'
    }
  },
  {
    path: '',
    component: LectureDashboardComponent,
    data: {
      title: 'Lecture-Dashboard'
    },
    canActivate: [AppGuard],
    children: [
      {
        path: 'myclasses',
        component: LectureClassComponent,
      },
      {
        path: 'myclasses/:id',
        component: LectureClassDetailComponent,
      },
      {
        path: 'mysubject/:id',
        component: LectureSubjectComponent,
      },
      {
        path: 'mytest/:id',
        component: LectureTestDetailComponent,
      },
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      //
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'user-types',
        component: UserTypeComponent,
        data: {
          title: 'User type'
        }
      },
      {
        path: 'users',
        component: UserComponent,
        data: {
          title: 'User'
        }
      },
      {
        path: 'classes',
        component: ClassComponent,
        data: {
          title: 'Class'
        }
      },
      {
        path: 'students',
        component: StudentComponent,
        data: {
          title: 'Student'
        }
      },
      {
        path: 'students/:id',
        component: StudentComponent,
        data: {
          title: 'Student'
        }
      },
      {
        path: 'Courses',
        component: SubjectComponent,
        data: {
          title: 'Subjects'
        }
      },
      {
        path: 'Part1',
        component: SubjectComponent1,
        data: {
          title: 'Part1'
        }
      },
      {
        path: 'Part1/:id',
        component: SubjectComponent,
        data: {
          title: 'Part1'
        }
      },
      {
        path: 'Part2',
        component: SubjectComponent2,
        data: {
          title: 'Part2'
        }
      },
      {
        path: 'Part2/:id',
        component: SubjectComponent2,
        data: {
          title: 'Part2'
        }
      },
      {
        path: 'Part3',
        component: SubjectComponent3,
        data: {
          title: 'Part3'
        }
      },
      {
        path: 'Part3/:id',
        component: SubjectComponent3,
        data: {
          title: 'Part3'
        }
      },
      {
        path: 'Part4',
        component: SubjectComponent4,
        data: {
          title: 'Part4'
        }
      },
      {
        path: 'Part4/:id',
        component: SubjectComponent4,
        data: {
          title: 'Part4'
        }
      },
      {
        path: 'Part5',
        component: SubjectComponent5,
        data: {
          title: 'Part5'
        }
      },
      {
        path: 'Part5/:id',
        component: SubjectComponent5,
        data: {
          title: 'Part5'
        }
      },
      {
        path: 'Part6',
        component: SubjectComponent6,
        data: {
          title: 'Part6'
        }
      },
      {
        path: 'Part6/:id',
        component: SubjectComponent6,
        data: {
          title: 'Part6'
        }
      },
      {
        path: 'Part7',
        component: SubjectComponent7,
        data: {
          title: 'Part7'
        }
      },
      {
        path: 'Part7/:id',
        component: SubjectComponent7,
        data: {
          title: 'Part7'
        }
      },
      {
        path: 'Photo',
        component: QuizComponent,
        data: {
          title: 'Photo'
        }
      },
      {
        path: 'Photo/:id',
        component: QuizComponent,
        data: {
          title: 'Photo'
        }
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
