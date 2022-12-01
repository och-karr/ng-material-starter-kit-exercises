import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoChipModel } from '../../models/crypto-chip.model';
import { CryptoChipsService } from '../../services/crypto-chips.service';

@Component({
  selector: 'app-crypto-chip-list',
  styleUrls: ['./crypto-chip-list.component.scss'],
  templateUrl: './crypto-chip-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipListComponent {
  readonly list$: Observable<CryptoChipModel[]> = this._cryptoChipsService.getAll();

  constructor(private _cryptoChipsService: CryptoChipsService) {
  }
}
