import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TemplateDTO as TemplateDTO } from '../models/template-data-modal';

@Injectable({
  providedIn: 'root'
})
export class TemplateDataService {

  private _selectedTemplateSub = new BehaviorSubject<TemplateDTO>({} as TemplateDTO);
  private _selectedTemplate$ = this._selectedTemplateSub.asObservable();

  private _templatesSub = new BehaviorSubject<TemplateDTO[]>([
    {
      id: 1,
      templateUrl: '../assets/temp1.png',
      templateName: 'temp1',
      isSelected: false
    },
    {
      id: 2,
      templateUrl: '../assets/temp2.png',
      templateName: 'temp2',
      isSelected: false
    },
    {
      id: 3,
      templateUrl: '../assets/temp3.png',
      templateName: 'temp3',
      isSelected: false
    },
    {
      id: 4,
      templateUrl: '../assets/temp4.png',
      templateName: 'temp4',
      isSelected: false
    },
    {
      id: 5,
      templateUrl: '../assets/temp5.png',
      templateName: 'temp5',
      isSelected: false
    }
  ]);
  private _templates$ = this._templatesSub.asObservable(); 

  private _profileTimeLineSub = new BehaviorSubject<TemplateDTO[]>([]);
  private _profileTimeLine$ = this._profileTimeLineSub.asObservable();

  constructor() { }


  getTemplates$(): Observable<TemplateDTO[]> {
    return this._templates$;
  }

  getSelectedTemplate$(): Observable<TemplateDTO> {
    return this._selectedTemplate$;
  }

  setSelectedTemplate(template: TemplateDTO): void {
    let currentTemplateList: TemplateDTO[] = [];
    this._selectedTemplateSub.next(template);
    currentTemplateList = this._templatesSub.value;
    //filter selected template
    currentTemplateList = currentTemplateList.filter(item => item.id !== template.id);
    //mark rest to false
    currentTemplateList = currentTemplateList.map(item => {
      return {
        ...item,
        isSelected: false
      }
    });
    this._templatesSub.next([template, ...currentTemplateList]);
  }
}
