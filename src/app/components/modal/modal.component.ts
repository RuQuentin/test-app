import { Component } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';
import { IArticle } from 'src/app/models/article.interface';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  article: IArticle;

  constructor(
    private articleService: ArticleService
  ) {}

  ngDoCheck() {
    this.article = this.articleService.getArticle();
  }


}