import { addProduct, products } from './products/products.service';
import { faker } from '@faker-js/faker';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    color: faker.color.rgb(),
    price: faker.commerce.price(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.multiple(faker.commerce.productAdjective, {
      count: { min: 1, max: 5 },
    }),
  });
}

console.log(products);
