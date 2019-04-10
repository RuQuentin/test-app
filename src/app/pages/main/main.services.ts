import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
    ) {}

  requestNews = () => this.http.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story`)
  
}