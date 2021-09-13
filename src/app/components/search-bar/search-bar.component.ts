import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/shared/services/util/util.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchQuery = new EventEmitter();
  searchForm: FormGroup;
  selectData = [
    { value: 10 },
    { value: 50 },
    { value: 100 }
  ];

  constructor(
    public util: UtilService
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3)])
    });
  }

  search(value): void {
    if (this.searchForm.valid) {
      this.searchQuery.emit(value);
    }
  }

}
