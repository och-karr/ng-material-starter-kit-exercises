import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ProductTableComponent } from './product-table.component';
import {AsyncPipe} from "@angular/common";

@NgModule({
  imports: [MatCardModule, CommonModule, AsyncPipe, MatTableModule],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}
