// accordion.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() sections: { title: string, content: string }[] = [];
  isExpanded: boolean[] = [];

  constructor() {}

  ngOnInit() {
    if (!Array.isArray(this.sections) || this.sections.length === 0) {
      this.sections = []; // Initialize sections as an empty array
    }
    this.isExpanded = new Array(this.sections.length).fill(false);
  }

  toggleSection(index: number) {
    this.isExpanded = this.isExpanded.map((_, i) => i === index ? !this.isExpanded[i] : false);
  }
}
