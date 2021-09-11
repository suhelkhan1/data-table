import { IUser } from '../shared/models/data.model';

export interface AppState {
  readonly user: IUser[];
}
