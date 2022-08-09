import { Component, OnInit } from '@angular/core';
import { TemplateDTO } from '../models/template-data-modal';
import { TemplateDataService } from '../services/template-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
