import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { PostComponent } from '../routes/post/post.component';
import { ConfCalComponent } from '../routes/conf-cal/conf-cal.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'posts', component: PostComponent },
  { path: 'tech-calendar-conferences', component: ConfCalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
