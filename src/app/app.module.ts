import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateCardComponent } from './template-card/template-card.component';
import { PostTimelineComponent } from './post-timeline/post-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateCardComponent,
    PostTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
