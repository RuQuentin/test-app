import { Injectable } from '@angular/core';
import { IArticle } from '../../models/article.interface';

@Injectable()
export class ArticleService {
  article: IArticle;

  constructor() {}

  setArticle = (item: IArticle) => {
    this.article = item;
  }

  getArticle = () => {
    return this.article;
  }
}