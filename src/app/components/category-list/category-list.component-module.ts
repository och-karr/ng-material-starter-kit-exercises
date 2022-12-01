import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CategoryListComponent } from './category-list.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule],
  declarations: [CategoryListComponent],
  providers: [],
  exports: [CategoryListComponent]
})
export class CategoryListComponentModule {
}
