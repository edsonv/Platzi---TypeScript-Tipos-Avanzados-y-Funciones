import { Product } from './product.model';

// type CreateProductDto = Omit<
//   Product,
//   'id' | 'createdAt' | 'updatedAt' | 'category'
// >;

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
