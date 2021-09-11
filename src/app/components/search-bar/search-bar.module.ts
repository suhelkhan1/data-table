import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';



@NgModule({
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule
  ]
})
export class SearchBarModule { }
