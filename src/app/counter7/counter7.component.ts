import { Component } from '@angular/core';

@Component({
  selector: 'app-counter7',
  templateUrl: './counter7.component.html',
  styleUrls: ['./counter7.component.css']
})
export class Counter7Component {
  counter: number = 0;
  customValue: string = '';
  error: string | null = null;

  increment() {
    this.counter++;
    this.clearError();
  }

  decrement() {
    this.counter--;
    this.clearError();
  }

  setCustomValue() {
    const parsedValue = parseInt(this.customValue, 10);

    if (!isNaN(parsedValue)) {
      this.counter = parsedValue;
      this.clearError();
    } else {
      this.error = 'Invalid custom value. Please enter a valid number.';
    }
  }

  validateInput() {
    if (!/^\d*$/.test(this.customValue)) {
      this.customValue = this.customValue.replace(/[^\d]/g, '');
    }
  }

  clearError() {
    this.error = null;
  }
}