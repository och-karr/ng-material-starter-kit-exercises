import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DogPictureComponent } from './dog-picture.component';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AsyncPipe,
    NgIf,
    MatCardModule
  ],
  declarations: [DogPictureComponent],
  providers: [],
  exports: [DogPictureComponent]
})
export class DogPictureComponentModule {
}
