import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Solution3RoutingModule } from './solution3-routing.module';
import { Solution3Component } from '../solution3/solution3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Solution3Component
  ],
  imports: [
    CommonModule,
    Solution3RoutingModule,
    FormsModule
  ]
})
export class Solution3Module { }
