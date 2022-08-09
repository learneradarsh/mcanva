import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mycanva';
  cardTemplates = [
    {
      id: 1,
      templateUrl: '../assets/temp1.png',
    },
    {
      id: 2,
      templateUrl: '../assets/temp2.png',
    },
    {
      id: 3,
      templateUrl: '../assets/temp3.png',
    },
    {
      id: 4,
      templateUrl: '../assets/temp4.png',
    },
    {
      id: 5,
      templateUrl: '../assets/temp5.png',
    }
  ]
}
