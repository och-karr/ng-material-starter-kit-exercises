import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CryptoChipListComponent } from './crypto-chip-list.component';
import { MatChipsModule } from "@angular/material/chips";
import { AsyncPipe } from "@angular/common";
import { MatListModule } from "@angular/material/list";

@NgModule({
  imports: [MatCardModule, MatChipsModule, AsyncPipe, MatListModule, CommonModule],
  declarations: [CryptoChipListComponent],
  providers: [],
  exports: [CryptoChipListComponent]
})
export class CryptoChipListComponentModule {
}
