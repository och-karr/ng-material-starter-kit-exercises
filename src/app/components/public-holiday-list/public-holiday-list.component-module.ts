import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHolidayListComponent } from './public-holiday-list.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [CommonModule, MatSelectModule],
  declarations: [PublicHolidayListComponent],
  providers: [],
  exports: [PublicHolidayListComponent]
})
export class PublicHolidayListComponentModule {
}
