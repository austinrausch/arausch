import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InterestsComponent } from './interests/interests.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  { path: '**', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
