import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TemplateDTO } from '../models/template-data-modal';
import { TemplateDataService } from '../services/template-data.service';

@Component({
  selector: 'app-post-timeline',
  templateUrl: './post-timeline.component.html',
  styleUrls: ['./post-timeline.component.scss']
})
export class PostTimelineComponent implements OnInit, OnDestroy {

  profileTimeLineData: TemplateDTO[] = [];
  subscription!: Subscription;
  constructor(private readonly templateDataService: TemplateDataService) { 
    console.log(this.profileTimeLineData);
  }

  ngOnInit(): void {
    this.subscription = this.templateDataService.getProfileTimeline().subscribe(data => {
      this.profileTimeLineData = [...data];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
