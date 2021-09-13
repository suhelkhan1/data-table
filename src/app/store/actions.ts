import { Action } from '@ngrx/store';
import { IUser } from '../shared/models/data.model';

export const LIST_USERS = '[USER] List';
export const SORT_USERS = '[USER] Sort';
export const SEARCH_USERS = '[USER] Search';

export class ListUsers implements Action {
    readonly type = LIST_USERS;

    constructor(public payload: IUser[]) {}
}

export class SortUsers implements Action {
    readonly type = SORT_USERS;

    constructor(public payload: string) {}
}

export type Actions = ListUsers | SortUsers;
