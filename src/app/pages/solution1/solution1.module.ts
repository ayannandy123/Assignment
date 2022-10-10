import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Solution1RoutingModule } from './solution1-routing.module';
import { Solution1Component } from '../solution1/solution1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Solution1Component
  ],
  imports: [
    CommonModule,
    Solution1RoutingModule
    ,FormsModule
  ]
})
export class Solution1Module { }
