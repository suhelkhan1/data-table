import { IUser } from '../shared/models/data.model';
import * as UserActions from './actions';

const initialState: IUser[] = [];

export function userReducer(state = initialState, action: UserActions.Actions): any {

  switch (action.type) {
    case UserActions.LIST_USERS:
      return [...state, ...action.payload];
    case UserActions.SORT_USERS:
      return state.slice().sort((a, b) => a[action.payload] > b[action.payload] ? 1 : -1);
    case UserActions.SEARCH_USERS:
      return state.filter(item => item.first_name.toLowerCase().match(action.payload.toLowerCase()));
    default:
      return state;
  }
}
