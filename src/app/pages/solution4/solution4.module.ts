import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Solution4RoutingModule } from './solution4-routing.module';
import { Solution4Component } from '../solution4/solution4.component';
import { ComponentsModule } from 'src/app/components/components.module';
// import { C1Component } from 'src/app/components/c1/c1.component';


@NgModule({
  declarations: [
    Solution4Component
  ],
  imports: [
    CommonModule,
    Solution4RoutingModule,
    ComponentsModule
  ]
})
export class Solution4Module { }
