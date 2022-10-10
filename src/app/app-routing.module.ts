import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Solution1Component } from './pages/solution1/solution1.component';

const routes: Routes = [
 
  {
    path: 'solution1',
    loadChildren: () => import('./pages/solution1/solution1.module').then(m => m.Solution1Module)
  },
  {
    path: 'solution3',
    loadChildren: () => import('./pages/solution3/solution3.module').then(m => m.Solution3Module)
  },
  {
    path: 'solution4',
    loadChildren: () => import('./pages/solution4/solution4.module').then(m => m.Solution4Module)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
