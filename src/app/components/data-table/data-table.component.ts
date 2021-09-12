import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IData, IUser } from 'src/app/shared/models/data.model';
import { ApiService } from 'src/app/shared/services';
import { AppState } from 'src/app/store/app.state';
import * as UserActions from '../../store/actions';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UtilService } from 'src/app/shared/services/util/util.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  data: IData;
  selectedCol;
  users: Observable<IUser[]>;

  constructor(
    private api: ApiService,
    private store: Store<AppState>,
    public util: UtilService
  ) {
    this.users = store.select('user');
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.api.get('assets/data/users.json').subscribe(res => {
      this.data = res;
      this.store.dispatch(new UserActions.ListUsers(this.data.results));
    });
  }

  sort(key): void {
    if (this.selectedCol === key) {
      return;
    }
    this.selectedCol = key;
    this.store.dispatch(new UserActions.SortUsers(key));
  }

  trackById(index: number, results: any): any {
    return results.id;
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.data.titles, event.previousIndex, event.currentIndex);
  }
}
