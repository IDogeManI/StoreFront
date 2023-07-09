import { ProductDto } from './product.model';
export class OrderDto {
  constructor(
    public id: string,
    public adress: string,
    public products: ProductDto[]
  ) {}
}
