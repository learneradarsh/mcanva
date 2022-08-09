import { Component, OnInit } from '@angular/core';
import { TemplateDTO } from './models/template-data-modal';
import { TemplateDataService } from './services/template-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cardTemplates: TemplateDTO[] = [];
  constructor(private readonly templateDataService: TemplateDataService) {
    console.log(this.cardTemplates);
  }
  ngOnInit() {
    this.templateDataService.getTemplates$().subscribe(data => {
      this.cardTemplates = [...data];
    });
  }
}
