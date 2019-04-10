import { Injectable } from '@angular/core';
import { IArticle } from '../../models/article.interface';

@Injectable()
export class ArticleService {
  article: IArticle;

  constructor() {}

  setArticle = (item: IArticle) => {
    this.article = item;
    console.log(this.article)
  }

  getArticle = () => {
    return this.article;
  }
}