import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ApiService } from '../../shared/services/api.service';
import { ArticleService } from '../../shared/services/article.service';



@NgModule({
  declarations: [ 
    MainComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    ArticleService
  ],
  exports: [
    MainComponent
  ]
})

export class MainModule {};