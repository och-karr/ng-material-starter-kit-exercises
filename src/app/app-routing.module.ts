import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CryptoChipListComponent} from './components/crypto-chip-list/crypto-chip-list.component';
import {PublicHolidayListComponent} from './components/public-holiday-list/public-holiday-list.component';
import {CheckboxCategoryListComponent} from './components/checkbox-category-list/checkbox-category-list.component';
import {CategoriesMenuListComponent} from './components/categories-menu-list/categories-menu-list.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {EmployeeFormComponent} from './components/employee-form/employee-form.component';
import {UserLoginFormComponent} from './components/user-login-form/user-login-form.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {ProductTableComponent} from './components/product-table/product-table.component';
import {CatFactComponent} from './components/cat-fact/cat-fact.component';
import {AgePredictionComponent} from './components/age-prediction/age-prediction.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {CardDetailsComponent} from './components/card-details/card-details.component';
import {DogPictureComponent} from './components/dog-picture/dog-picture.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CategoryListComponentModule} from './components/category-list/category-list.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CryptoChipListComponentModule} from './components/crypto-chip-list/crypto-chip-list.component-module';
import {CryptoChipsServiceModule} from './services/crypto-chips.service-module';
import {PublicHolidayListComponentModule} from './components/public-holiday-list/public-holiday-list.component-module';
import {PublicHolidaysServiceModule} from './services/public-holidays.service-module';
import {
  CheckboxCategoryListComponentModule
} from './components/checkbox-category-list/checkbox-category-list.component-module';
import {
  CategoriesMenuListComponentModule
} from './components/categories-menu-list/categories-menu-list.component-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {EmployeeFormComponentModule} from './components/employee-form/employee-form.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {UserLoginFormComponentModule} from './components/user-login-form/user-login-form.component-module';
import {UserLoginServiceModule} from './services/user-login.service-module';
import {UserFormComponentModule} from './components/user-form/user-form.component-module';
import {UserServiceModule} from './services/user.service-module';
import {ProductTableComponentModule} from './components/product-table/product-table.component-module';
import {CatFactComponentModule} from './components/cat-fact/cat-fact.component-module';
import {CatFactServiceModule} from './services/cat-fact.service-module';
import {AgePredictionComponentModule} from './components/age-prediction/age-prediction.component-module';
import {AgePredictionServiceModule} from './services/age-prediction.service-module';
import {ProductDetailsComponentModule} from './components/product-details/product-details.component-module';
import {UserDetailsComponentModule} from './components/user-details/user-details.component-module';
import {CardDetailsComponentModule} from './components/card-details/card-details.component-module';
import {CardServiceModule} from './services/card.service-module';
import {DogPictureComponentModule} from './components/dog-picture/dog-picture.component-module';
import {DogPictureServiceModule} from './services/dog-picture.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: ProductListComponent}, {
    path: 'categories',
    component: CategoryListComponent
  }, {path: 'crypto', component: CryptoChipListComponent}, {
    path: 'public-holidays',
    component: PublicHolidayListComponent
  }, {path: 'checkbox-categories', component: CheckboxCategoryListComponent}, {
    path: 'categories-menu',
    component: CategoriesMenuListComponent
  }, {path: 'create-product', component: ProductFormComponent}, {
    path: 'create-employee',
    component: EmployeeFormComponent
  }, {path: 'login', component: UserLoginFormComponent}, {
    path: 'register',
    component: UserFormComponent
  }, {path: 'product-search', component: ProductTableComponent}, {
    path: 'cat-fact',
    component: CatFactComponent
  }, {path: 'age/:name', component: AgePredictionComponent}, {
    path: 'product/:id',
    component: ProductDetailsComponent
  }, {path: 'user/:id', component: UserDetailsComponent}, {
    path: 'cart/:id',
    component: CardDetailsComponent
  }, {
    path: ':breed',
    component: DogPictureComponent
  }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipListComponentModule, CryptoChipsServiceModule, PublicHolidayListComponentModule, PublicHolidaysServiceModule, CheckboxCategoryListComponentModule, CategoriesMenuListComponentModule, ProductFormComponentModule, ProductServiceModule, EmployeeFormComponentModule, EmployeeServiceModule, UserLoginFormComponentModule, UserLoginServiceModule, UserFormComponentModule, UserServiceModule, ProductTableComponentModule, CatFactComponentModule, CatFactServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, ProductDetailsComponentModule, UserDetailsComponentModule, CardDetailsComponentModule, CardServiceModule, DogPictureComponentModule, DogPictureServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
