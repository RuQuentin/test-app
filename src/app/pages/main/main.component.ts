import { Component, OnInit } from '@angular/core';
import { ApiService } from './main.services';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRes } from '../../models/res.interface';
import { IList } from '../../models/list.interface';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  titles: string[] = [
    'title',
    'url',
    'created_at',
    'author'
  ]

  list: any;

  constructor(
    private apiService: ApiService
  ) {};

  ngOnInit() {
    this.getNews();
  }

  getNews = () => setInterval( () => {
    this.list = this.apiService.requestNews()
      .pipe(
      map((res: IRes) => {
        console.log(res.hits)
        return of(res.hits)})
    )
    }, 2000)
}