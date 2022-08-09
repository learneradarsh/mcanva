import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TemplateDTO } from '../models/template-data-modal';
import { TemplateDataService } from '../services/template-data.service';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.scss']
})
export class TemplateEditorComponent implements OnInit {

  selectedTempate: TemplateDTO = {} as TemplateDTO;
  templateEditorForm!: FormGroup;

  constructor(private readonly templateDataService: TemplateDataService) { }

  ngOnInit(): void {
    this.templateEditorForm = new FormGroup({
      offerHeading: new FormControl(''),
      offerDiscount: new FormControl('')
    });

    this.templateDataService.getSelectedTemplate$().subscribe(data => {
      this.selectedTempate = {...data};
    })
  }

  onSubmit(templateFormInfo: FormGroup) {
    console.log(templateFormInfo);
  }

}
