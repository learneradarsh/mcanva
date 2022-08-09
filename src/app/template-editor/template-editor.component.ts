import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TemplateDTO } from '../models/template-data-modal';
import { TemplateDataService } from '../services/template-data.service';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.scss']
})
export class TemplateEditorComponent implements OnInit, OnDestroy {

  selectedTempate: TemplateDTO = {} as TemplateDTO;
  templateEditorForm!: FormGroup;

  subscription!: Subscription;

  constructor(private readonly templateDataService: TemplateDataService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.templateEditorForm = new FormGroup({
      offerHeading: new FormControl(''),
      offerDiscount: new FormControl('')
    });

    this.subscription = this.templateDataService.getSelectedTemplate$().subscribe(data => {
      this.selectedTempate = {...data};
    })
  }

  onSubmit(templateFormInfo: FormGroup) {
    this.selectedTempate.offerTitle = templateFormInfo.get('offerHeading')?.value;
    this.selectedTempate.discountCode = templateFormInfo.get('offerDiscount')?.value;
    this.templateDataService.updateTimeLine(this.selectedTempate);
    this.templateEditorForm.reset();
  }

  goToPosts() {
    this.router.navigate(['/timeline']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
