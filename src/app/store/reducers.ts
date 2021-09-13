import * as dayjs from 'dayjs';
import { IUser } from '../shared/models/data.model';
import * as UserActions from './actions';

const initialState: IUser[] = [];

export function userReducer(state = initialState, action: UserActions.Actions): any {

  switch (action.type) {
    case UserActions.LIST_USERS:
      return [...state, ...action.payload];
    case UserActions.SORT_USERS:
      if (action.payload === 'date_of_birth') {
        return state.slice().sort((a, b) => dayjs(a[action.payload]).valueOf() - dayjs(b[action.payload]).valueOf());
      } else {
        return state.slice().sort((a, b) => a[action.payload] > b[action.payload] ? 1 : -1);
      }
    default:
      return state;
  }
}
