import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayProdPage } from './display-prod.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayProdPageRoutingModule {}
