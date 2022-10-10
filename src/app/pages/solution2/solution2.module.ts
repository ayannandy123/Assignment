import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Solution2RoutingModule } from './solution2-routing.module';
import { Solution2Component } from '../solution2/solution2.component';


@NgModule({
  declarations: [
    Solution2Component
  ],
  imports: [
    CommonModule,
    Solution2RoutingModule
  ]
})
export class Solution2Module { }
