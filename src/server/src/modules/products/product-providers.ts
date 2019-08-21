import {Connection} from 'typeorm';
import {ProductEntity} from './entity/product-entity';

export const productProviders = [
    {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(ProductEntity),
        inject: ['ZEBRA_DB_CONNECTION']
    },
];
