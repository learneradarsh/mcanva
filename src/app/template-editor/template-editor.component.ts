import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.scss']
})
export class TemplateEditorComponent implements OnInit {

  @Input() selectedTempate: any;
  templateEditorForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.templateEditorForm = new FormGroup({
      offerHeading: new FormControl(''),
      offerDiscount: new FormControl('')
    });
  }

  onSubmit(templateFormInfo: FormGroup) {
    console.log(templateFormInfo);
  }

}
