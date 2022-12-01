import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { ProductService } from '../../services/product.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl()
  });
  readonly categoryList$: Observable<CategoryModel[]> = this._categoriesService.getAll();

  constructor(private _productService: ProductService, private _categoriesService: CategoriesService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService.create(productForm.getRawValue()).subscribe();
  }
}
