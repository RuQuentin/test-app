import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MainComponent } from './main.component';
import { ApiService } from './main.services';
import { AppRoutingModule } from '../../app-routing.module';


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
    ApiService
  ],
  exports: [
    MainComponent
  ]
})

export class MainModule {};