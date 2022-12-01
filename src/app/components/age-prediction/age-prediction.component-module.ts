import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AgePredictionComponent } from './age-prediction.component';
import {AsyncPipe} from "@angular/common";

@NgModule({
  imports: [AsyncPipe, CommonModule, MatCardModule],
  declarations: [AgePredictionComponent],
  providers: [],
  exports: [AgePredictionComponent]
})
export class AgePredictionComponentModule {
}
