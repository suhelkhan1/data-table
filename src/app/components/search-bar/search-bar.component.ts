import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as UserActions from '../../store/actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3)])
    });
    this.store.subscribe(res => console.log(res));
  }

  search(value): void {
    if (this.searchForm.valid) {
      this.store.dispatch({
        type: UserActions.SEARCH_USERS,
        payload: value
      });
    }
  }

}
