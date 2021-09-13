import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/data.model';
import { UtilService } from 'src/app/shared/services/util/util.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() users: Observable<IUser[]>;
  btnRange = {
    from: 0,
    to: 5
  };

  constructor(
    public util: UtilService
  ) {}

  ngOnInit(): void {
  }

  getBtnRange(length): any {
    return [].constructor(Math.ceil(length / this.util.pagination.limit));
  }

  setPage(pageNo): void {
    if (this.util.pagination.page === pageNo) {
      return;
    }
    if (pageNo === 1) {
      Object.assign(this.util.pagination, {
        from: 0,
        to: this.util.pagination.limit
      });
      this.util.pagination.page = pageNo;
      return;
    }
    Object.assign(this.util.pagination, {
      from: (pageNo - 1) * this.util.pagination.limit,
      to: pageNo * this.util.pagination.limit,
    });
    this.util.pagination.page = pageNo;
  }

}
