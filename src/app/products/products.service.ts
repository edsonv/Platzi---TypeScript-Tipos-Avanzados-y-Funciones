import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDto } from './productDto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  // data.id = 'lkajsdhlbfa';
  // data.createdAt = new Date(1998, 1, 1);
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(data);
  return newProduct;
};

export const updateProduct = (id: string, changes: Product) => {
  // data.id = 'lkajsdhlbfa';
  // data.createdAt = new Date(1998, 1, 1);
};
