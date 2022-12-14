import { Component, Input, OnInit } from '@angular/core';
import { TemplateDTO } from '../models/template-data-modal';
import { TemplateDataService } from '../services/template-data.service';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent implements OnInit {

  @Input() cardInfo: TemplateDTO = {} as TemplateDTO;
  @Input() showDelete?: boolean = false;
  constructor(private readonly templateDataService: TemplateDataService) { }

  ngOnInit(): void {
  }

  onTemplateSelect(template: TemplateDTO): void {
    template.isSelected = true;
    this.templateDataService.setSelectedTemplate(template);
  }

  deletePost(template: TemplateDTO): void {
    this.templateDataService.deletePostFromTimeline(template);
  }

}
