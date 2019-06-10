import {plainToClass} from 'class-transformer';

import {Product} from './models/product';

export function createProducts() {
    return plainToClass(Product, [
        {
            name: 'bread',
            description: '1 loaf',
            price: 2.66,
        },
        {
            name: 'cucumber',
            description: '0.5kg',
            price: 2.56
        },
        {
            name: 'tomato',
            description: '0.5kg',
            price: 1.45
        },
    ]);
}
