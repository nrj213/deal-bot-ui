import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConstants } from './constants';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) { }

  API_BASE_URL: string = AppConstants.API_BASE_URL;

  search = (keywords: string) =>  {
    return this.http.get(this.API_BASE_URL + '/flipkart/search/' + keywords);
  };
}