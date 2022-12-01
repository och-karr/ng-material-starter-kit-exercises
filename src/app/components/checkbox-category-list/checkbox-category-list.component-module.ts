import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxCategoryListComponent } from './checkbox-category-list.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CheckboxCategoryListComponent],
  providers: [],
  exports: [CheckboxCategoryListComponent]
})
export class CheckboxCategoryListComponentModule {
}
