import { Component, ElementRef, ViewChild } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';
import { IArticle } from 'src/app/models/article.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  article: IArticle;

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngDoCheck() {
    this.article = this.articleService.getArticle();
  }

  closeModal(event) {
    if(!event.target.className.includes('modal-wrapper')
      && !event.target.className.includes('button')) return;

    this.router.navigate(['']);
  }
}