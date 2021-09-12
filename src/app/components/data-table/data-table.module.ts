import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { DataTableComponent } from './data-table.component';


@NgModule({
  declarations: [DataTableComponent],
  exports: [DataTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule,
    ScrollingModule,
    DragDropModule,
    SearchBarModule,
    PaginationModule
  ]
})
export class DataTableModule { }
