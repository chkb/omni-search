import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OmniSearchComponent } from './omni-search/omni-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: OmniSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
