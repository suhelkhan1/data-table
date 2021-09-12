import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnChanges {

  @Input() config;
  @Output() selectChange = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
    this.config = Object.assign({
      appearance: 'outline',
      data: []
    }, this.config);
  }

}
