import { createSelector } from '@ngrx/store';
import { IUser } from '../shared/models/data.model';
import { AppState } from './app.state';


export const userSelector = createSelector(
  (state: AppState) => state.user,
  (users: IUser[]) => users
);

export const searchUserSelector = (name: string) => createSelector( userSelector, (users) => {
  return users.filter(item => item.first_name.toLowerCase().match(name.toLowerCase()));
});
