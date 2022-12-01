import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {Observable, switchMap} from "rxjs";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {

  readonly details$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productService.getOne(data['id'])));
  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
