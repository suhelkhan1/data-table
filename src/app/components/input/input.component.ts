import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnChanges {

  @Input() config;
  @Output() inputChange = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
    this.config = Object.assign({
      appearance: 'outline',
      label: 'Name',
      type: 'text',
      placeholder: 'e.g Marcus',
      controlName: 'name',
      group: ''
    }, this.config);
  }

}
