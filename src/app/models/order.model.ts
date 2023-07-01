import { Product } from './product.model';
export class Order {
  constructor(public adress: string, public products: Product[]) {}
}
