import { ProductDto } from './product.model';
export class OrderDto {
  constructor(public adress: string, public products: ProductDto[]) {}
}
