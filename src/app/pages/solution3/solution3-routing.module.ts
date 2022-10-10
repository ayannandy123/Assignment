import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Solution1Component } from '../solution1/solution1.component';
import { Solution3Component } from './solution3.component';

const routes: Routes = [{ path: '', component: Solution3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Solution3RoutingModule { }
