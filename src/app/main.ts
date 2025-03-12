import { addProduct } from './products/products.service';

addProduct({
  id: '1',
  title: '1',
  createdAt: new Date(),
  stock: 90,
  category: {
    id: '12',
    name: 'c1',
  },
});
