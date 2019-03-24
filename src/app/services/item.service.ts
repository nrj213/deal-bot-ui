import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConstants } from './constants';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  API_BASE_URL: string = AppConstants.API_BASE_URL;

  get() {
    return this.http.get(this.API_BASE_URL + '/item');
  }

  save(item) {
    return this.http.post(this.API_BASE_URL + '/item/add', item);
  };
  
  delete(id) {
    return this.http.delete(this.API_BASE_URL + '/item/remove/' + id);
  }
}