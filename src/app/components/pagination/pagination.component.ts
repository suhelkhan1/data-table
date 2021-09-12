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
  selectedPage = 1;
  btnRange = {
    from: 0,
    to: 5
  };

  constructor(
    private store: Store<AppState>,
    public util: UtilService
  ) {
    this.users = store.select('user');
  }

  ngOnInit(): void {
  }

  setPage(pageNo): void {
    if (this.selectedPage === pageNo) {
      return;
    }
    if (pageNo === 1) {
      Object.assign(this.util.pagination, {
        from: 0,
        to: this.util.pagination.limit
      });
      this.selectedPage = pageNo;
      return;
    }
    Object.assign(this.util.pagination, {
      from: (pageNo - 1) * this.util.pagination.limit,
      to: pageNo * this.util.pagination.limit,
    });
    this.selectedPage = pageNo;
  }

}
