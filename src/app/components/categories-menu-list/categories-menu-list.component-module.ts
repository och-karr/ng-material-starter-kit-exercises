import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CategoriesMenuListComponent } from './categories-menu-list.component';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, CommonModule],
  declarations: [CategoriesMenuListComponent],
  providers: [],
  exports: [CategoriesMenuListComponent]
})
export class CategoriesMenuListComponentModule {
}
