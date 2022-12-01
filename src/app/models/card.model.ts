export interface CardModel {
  readonly id: number;
  readonly userId: number;
  readonly date: number;
  readonly products: Array<Products>;
}
interface Products {
  readonly productId: number;
  readonly quantity: number;
}

