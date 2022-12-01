import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {CardModel} from "../../models/card.model";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailsComponent {
  constructor(private _cardService: CardService, private _activatedRoute: ActivatedRoute) {
  }

  readonly params$: Observable<CardModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._cardService.getOne(data['id'])));
}
