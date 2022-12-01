import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {DogPictureService} from "../../services/dog-picture.service";
import {DogPictureModel} from "../../models/dog-picture.model";

@Component({
  selector: 'app-dog-picture',
  templateUrl: './dog-picture.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogPictureComponent {
  constructor(private _dogPictureService: DogPictureService, private _activatedRoute: ActivatedRoute) {
  }
  readonly params$: Observable<DogPictureModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._dogPictureService.getOne(data['breed'])));
}
