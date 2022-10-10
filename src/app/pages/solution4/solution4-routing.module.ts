import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from 'src/app/components/c1/c1.component';
import { C2Component } from 'src/app/components/c2/c2.component';
import { C3Component } from 'src/app/components/c3/c3.component';
import { C4Component } from 'src/app/components/c4/c4.component';
import { Solution4Component } from './solution4.component';

const routes: Routes = [
  {
    path:'',
    component:Solution4Component
  },
  {
    path:'c1',
    component:C1Component
  },
  {
    path:'c2',
    component:C2Component
  }
  ,
  {
    path:'c3',
    component:C3Component
  }
  ,
  {
    path:'c4',
    component:C4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Solution4RoutingModule { }
