import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/data.model';
import { UtilService } from 'src/app/shared/services/util/util.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  users: Observable<IUser[]>;

  constructor(
    private store: Store<AppState>,
    public util: UtilService
  ) {
    this.users = store.select('user');
  }

  ngOnInit(): void {
  }

}
