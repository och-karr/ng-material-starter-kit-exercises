import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { MatCardModule } from "@angular/material/card";

@NgModule({
    imports: [CommonModule, MatCardModule],
  declarations: [UserDetailsComponent],
  providers: [],
  exports: [UserDetailsComponent]
})
export class UserDetailsComponentModule {
}
