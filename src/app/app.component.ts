import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questions';
  accordionSections = [
    {
      title: 'Section 1',
      content: 'Content for Section 1 goes here.'
    },
    {
      title: 'Section 2',
      content: 'Content for Section 2 goes here.'
    },
    {
      title: 'Section 3',
      content: 'Content for Section 3 goes here.'
    }
  ];
}