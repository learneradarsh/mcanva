import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostTimelineComponent } from './post-timeline/post-timeline.component';

const routes: Routes = [{
  path: '/',
  component: AppComponent,
}, {
  path: '/posts',
  component: PostTimelineComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
