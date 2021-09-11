import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FooterModule, HeaderModule } from '../components';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
