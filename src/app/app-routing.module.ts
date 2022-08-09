import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostTimelineComponent } from './post-timeline/post-timeline.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'timeline',
  component: PostTimelineComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
