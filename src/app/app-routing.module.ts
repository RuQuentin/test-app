import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [{

  path: '',
  component: MainComponent,
  children: [
    {
      path: ':id',
      component: ModalComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
