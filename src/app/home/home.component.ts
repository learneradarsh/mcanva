import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TemplateDTO } from '../models/template-data-modal';
import { TemplateDataService } from '../services/template-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  cardTemplates: TemplateDTO[] = [];
  subscription!: Subscription;
  constructor(private readonly templateDataService: TemplateDataService) {
    console.log(this.cardTemplates);
  }
  ngOnInit() {
    this.subscription = this.templateDataService.getTemplates$().subscribe(data => {
      this.cardTemplates = [...data];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
