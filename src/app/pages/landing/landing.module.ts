import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing.routes';
import { LandingComponent } from './landing.component';
import { DataTableModule } from 'src/app/components';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    DataTableModule
  ]
})
export class LandingModule { }
