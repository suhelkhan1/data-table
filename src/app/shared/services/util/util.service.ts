import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public pagination = {
    from: 0,
    to: 10
  };

  constructor() { }
}