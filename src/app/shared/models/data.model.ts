export interface IData {
  page: number;
  results: IUser[];
  total_pages: number;
  total_results: number;
  titles: [{
    key: string,
    label: string
  }];
}


export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  city: string;
}
