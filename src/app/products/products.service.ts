import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import {
  CreateProductDto,
  FindProductDto,
  UpdateProductDto,
} from './productDto';

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
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: string | number,
  changes: UpdateProductDto
): Product => {
  // data.id = 'lkajsdhlbfa';
  // data.createdAt = new Date(1998, 1, 1);
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };

  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  return products;
};
