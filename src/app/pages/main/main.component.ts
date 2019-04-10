import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { ArticleService } from '../../shared/services/article.service';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRes } from '../../models/res.interface';
import { IArticle } from '../../models/article.interface';

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

  list: Observable<IArticle[]>;
  show: boolean = false;

  constructor(
    private apiService: ApiService,
    private articleService: ArticleService
  ) {};

  ngOnInit() {
    this.getNews();
  }

  getNews = () => setInterval( () => {
    this.list = this.apiService.requestNews()
      .pipe(
      map((res: IRes) => {
        return res.hits})
    )
    }, 2000)

  chooseArticle = (article: IArticle) => {
    this.show = true;
    this.articleService.setArticle(article)
  }
}