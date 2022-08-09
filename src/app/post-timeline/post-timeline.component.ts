import { Component, OnInit } from '@angular/core';
import { TemplateDTO } from '../models/template-data-modal';
import { TemplateDataService } from '../services/template-data.service';

@Component({
  selector: 'app-post-timeline',
  templateUrl: './post-timeline.component.html',
  styleUrls: ['./post-timeline.component.scss']
})
export class PostTimelineComponent implements OnInit {

  profileTimeLineData: TemplateDTO[] = [];
  constructor(private readonly templateDataService: TemplateDataService) { }

  ngOnInit(): void {
    this.templateDataService.getProfileTimeline().subscribe(data => {
      this.profileTimeLineData = [...data];
    });
  }

}
