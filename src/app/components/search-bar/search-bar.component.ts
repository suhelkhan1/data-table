import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UtilService } from 'src/app/shared/services/util/util.service';
import { AppState } from 'src/app/store/app.state';
import * as UserActions from '../../store/actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;
  selectData = [
    { value: 10 },
    { value: 50 },
    { value: 100 }
  ];

  constructor(
    private store: Store<AppState>,
    public util: UtilService
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3)])
    });
  }

  search(value): void {
    if (this.searchForm.valid) {
      this.store.dispatch(new UserActions.SearchUsers(value));
    }
  }

}
