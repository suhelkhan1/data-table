import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IData, IUser } from 'src/app/shared/models/data.model';
import { ApiService } from 'src/app/shared/services';
import { AppState } from 'src/app/store/app.state';
import * as UserActions from '../../store/actions';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  data: IData;
  titles = [
    { label: 'Title', key: 'original_title'},
    { label: 'Rating', key: 'vote_average'},
    { label: 'Release Date', key: 'release_date'}
  ];
  selectedCol;
  users: Observable<IUser[]>;


  constructor(
    private api: ApiService,
    private store: Store<AppState>
  ) {
    this.users = store.select('user');
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.api.get('assets/data/users.json').subscribe(res => {
      this.data = res;
      this.store.dispatch({
        type: UserActions.LIST_USERS,
        payload: this.data.results
      });
    });
  }

  keys(data): any {
    return data ? Object.keys(data) : [];
  }

  sort(key): void {
    if (this.selectedCol === key) {
      return;
    }
    this.selectedCol = key;
    this.store.dispatch({
      type: UserActions.SORT_USERS,
      payload: key
    });
  }

  trackById(index: number, results: any): any {
    return results.id;
  }

}
